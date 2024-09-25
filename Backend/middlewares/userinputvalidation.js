const z  = require('zod');

const userschema = z.object({
    username:z.string(),
    email:z.string().email(),
    password:z.string().min(6).max(20)
})

const userProfileSchema = z.object({
    username:z.string(),
    password:z.string()
})

function userinputvalidation(req,res,next){
    const body  = req.body;
    if(userschema.safeParse(body).success === true){
        next();
    }else{
        return res.status(404).json({"msg":"input validation failed"});
    }
}

function userProfilevalidation(req,res,next){
    const body = req.body;
    if(userProfileSchema.safeParse(body).success){
        next();
    }else{
        return res.status(500).json({"msg":"input validation failed"})
    }
}

module.exports = {userinputvalidation,userProfilevalidation};