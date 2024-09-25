const z = require('zod');

const productDataSchema = z.object({
    name:z.string(),
    description:z.string(),
    price:z.number(),
    category:z.string()
}) 

function productDataValidation(req,res,next){
const body = req.body;
if(productDataSchema.safeParse(body).success){
    next();
}else{
    return res.status(400).json({"msg":"input validation failed for the product"});
}
}

module.exports = {productDataValidation};