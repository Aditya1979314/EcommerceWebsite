const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const {dbConnect} = require('./db.js');
const {userinputvalidation,userProfilevalidation} = require('./middlewares/userinputvalidation.js');
const {userauth} = require('./middlewares/UserAuth.js')
const {productDataValidation} = require('./middlewares/admin.js');
const Razorpay = require('razorpay');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


app.post('/signup',userinputvalidation,async (req,res)=>{
    try{
        const {username,email,password} = req.body;
        const client = await dbConnect();
        const checkemailquery = `
        SELECT email FROM users WHERE email = $1;
        `
        const values = [email];
       const data =  await client.query(checkemailquery,values);
       if(data.rows.length>0){
        return res.status(404).json({"msg":"user already exists"})
       }
       const savedataquery = `
       INSERT INTO users(username,email,password)
       VALUES($1,$2,$3);
       `;
       await client.query(savedataquery,[username,email,password]);
        return res.status(200).json({"msg":"user signedUp"});
    }catch(err){
        return res.status(404).json({"msg":"some error occured"});
    }
})

app.post('/login',userinputvalidation,async (req,res)=>{
    try{
        const {username,email,password} = req.body;
        const client = await dbConnect();
        const checkquery = `
        SELECT * FROM users WHERE email = $1; 
        `
        const userdata = await client.query(checkquery,[email]);
        if(userdata.rows.length === 0){
            return res.status(201).json({"msg":"user doesnt exist"});
        }

        if(password !== userdata.rows[0].password){
            return res.status(201).json({"msg":"password is incorrect"});
        }
        console.log(userdata.rows[0].user_id)
        const token = jwt.sign({id:userdata.rows[0].user_id},process.env.jwtSecret);
        return res.status(200).json({"token":token})
    }catch(err){
        return res.status(500).json({"msg":"some error occured"})
    }
})

app.get('/me',userauth,(req,res)=>{
const data = req.data;
return res.status(200).json(data)
})

app.patch('/userProfile',userProfilevalidation,userauth,async (req,res)=>{
    try{
        const {username,password} = req.body;
        const {id} = req.data;
        console.log(id);
        const client = await dbConnect();

        const queryarr = [];
        const values = [];
        let count = 1;


        if(username){
            queryarr.push(`username = $${count++}`);
            values.push(username)
        }

        if(password){
            queryarr.push(`password  = $${count++}`);
            values.push(password);
        }

        if(queryarr.length === 0){
            return res.status(400).json({"msg":"no fields provided"});
        }

        values.push(id);

        const patchQuery = `
        UPDATE users
        SET ${queryarr.join(', ')}
        WHERE user_id = $${count};
        `;

        await client.query(patchQuery,values);
        return res.status(200).json({"msg":"username and password updated"});
    }catch(err){
        return res.status(500).json({"msg":"some error occured"});
    }
})

app.get('/user/products',async (req,res)=>{
    try{
        const client = await dbConnect();
        const {category,minprice,maxprice,searchterm} = req.query;
    
        let queryarr = [];
        let values = [];
        let count = 1;
        if(category){
            queryarr.push(`category = $${count++}`);
            values.push(category);
        }
    
        if(minprice){
            queryarr.push(`price >= $${count++}`);
            values.push(parseFloat(minprice));
        }
    
        if(maxprice){
            queryarr.push(`price <= $${count++}`);
            values.push(parseFloat(maxprice));
        }
    
        if(searchterm){
            queryarr.push(`(name ILIKE $${count} OR description ILIKE $${count++})`);
            values.push(`%${searchterm}%`);
        }
    
        let basequery = `SELECT * FROM products`;
        if(queryarr.length > 0){
           const query = `${basequery} WHERE ${queryarr.join(' AND ')}` ;
           const data = await client.query(query,values);
           return res.status(200).json(data.rows);
        }
    
    }catch(err){
        return res.status(400).json({"msg":"some error occured"});
    }
})

app.get('/user/products/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const productid = parseInt(id,10);
        const client = await dbConnect();
        const query = `
        SELECT * FROM products WHERE product_id = $1;
        `;
        const data = await client.query(query,[productid]);
        return res.status(200).json(data.rows);
    }catch(err){
        return res.status(400).json({"msg":"some error occured"});
    }
})

app.post('/user/addcart',userauth,async (req,res)=>{
    try{
        const{id} = req.query;
        const userid = req.data.id;
        const productid = parseInt(id,10);
        const client = await dbConnect();
            const query = `
            INSERT INTO cart(user_id,product_id)
            VALUES ($1,$2);
            `
            await client.query(query,[userid,productid]);
            return res.status(200).json({"msg":"product added to cart"});
    }catch(err){
        return res.status(400).json({"msg":"some error occured"});
    }
})

app.delete('/user/delcart',userauth,async (req,res)=>{
    try{
        const client = await dbConnect();
        const {id} = req.query;
        const userid = req.data.id;
        const query = `
        DELETE FROM cart 
        WHERE user_id=$1 AND product_id = $2;
        `;
    
        await client.query(query,[userid,id]);
        return res.status(200).json({"msg":"product removed from cart"});

    }catch(err){
        return res.status(400).json({"msg":"some error occured"});
    }
})

app.get('/user/cart',userauth,async(req,res)=>{
    const userid =req.data.id;
    try{
        const client = await dbConnect();
        const query = `
        SELECT *
        FROM cart 
        INNER JOIN products
        ON cart.product_id = products.product_id 
        WHERE user_id = $1;
        `;
        const data = await client.query(query,[userid]);
        return res.status(200).json(data.rows);
    }catch(err){
        return res.status(400).json({"msg":"some error occured"});
    }
})

app.post('/user/create-order',userauth,async(req,res)=>{
    const keyid = process.env.key_id;
    const keysecret = process.env.key_secret;
    const razorpay = new Razorpay({
        key_id:keyid,
        key_secret:keysecret
    })
    const {amount,currency} = req.body;
    try{
        const orderdata = await razorpay.orders.create({
            amount:amount*100,
            currency:currency,
            payment_capture: 1,
        })
        return res.status(200).json(orderdata)
    }catch(err){
        return res.status(404).json({"msg":"some error occured"});
    }
})

app.post('/user/addproduct',userauth,async (req,res)=>{
const productid = parseInt(req.query.id);
const userid = req.data.id;
try{
    const client = await dbConnect();
    const query = `
    INSERT INTO  ordered_products(user_id,product_id)
    VALUES($1,$2);
    `
    await client.query(query,[userid,productid]);
    return res.status(200).json({"msg":"product ordered"});
}catch(err){
    return res.status(400).json({"msg":"some error occured"});
}

})

app.post('/admin/addproduct',productDataValidation,async (req,res)=>{
const{name,description,price,category} = req.body;
try{
const client = await dbConnect();
const query = `
INSERT INTO products(name,description,price,category)
VALUES ($1,$2,$3,$4);
`;
await client.query(query,[name,description,price,category]);
return res.status(200).json({"msg":"product added"});
}catch(err){
    return res.status(401).json({"msg":"some error occured"});
}
})

app.get('/admin/allproducts',async (req,res)=>{
try{
const client = await dbConnect();
const query = `
SELECT * FROM products;
`
const data = await client.query(query);
return res.status(200).json(data.rows);

}catch(err){
    return res.status(400).json({"msg":"some error occured"});
}
})

app.patch('/admin/allproducts/:id',productDataValidation,async(req,res)=>{
    try{
        const {name,description,price,category} = req.body;
        const {id} = req.params;
        const productId = parseInt(id,10);
        const client = await dbConnect();
        const queryarr = [];
        const values = [];
        let count = 1;
 
        if(name){
            queryarr.push(`name = $${count++}`)
            values.push(name);
        }

        if(description){
            queryarr.push(`description = $${count++}`)
            values.push(description);
        }

        if(price){
            queryarr.push(`price = $${count++}`)
            values.push(price)
        }

        if(category){
            queryarr.push(`category = $${count++}`)
            values.push(category);
        }
       
        if(queryarr.length === 0){
            return res.status(400).json({"msg":"no fields provided"});
        }
        values.push(productId);
    
        const query = `
     UPDATE products
        SET ${queryarr.join(', ')}
        WHERE product_id = $${count};
        `;
        await client.query(query,values)
        return res.status(200).json({"msg":"products data updated"});
    }catch(err){
        return res.status(400).json({"msg":"some error occured"});
    }
})

app.get('/admin/allusers',async (req,res)=>{
try{
const client = await dbConnect();
const query = `
SELECT * FROM users;
`
const data = await client.query(query);
return res.status(200).json({"data":data.rows});
}catch(err){
return res.status(400).json({"msg":"some error occured"});
}
})



app.listen(3000,()=>{
    console.log("the server is connected");
})