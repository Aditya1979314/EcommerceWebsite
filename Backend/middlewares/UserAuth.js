const jwt = require("jsonwebtoken");

function userauth(req,res,next){
    const authorization = req.headers.authorization;

    if(!authorization || !authorization.startsWith("Bearer ")){
        return res.status(401).json({"msg":"user not authorized"});
    }

    const token = authorization.split(' ')[1];
    if(token){
        const data = jwt.verify(token,process.env.jwtSecret);
        req.data = data;
        next();
    }else{
        return res.status(500).json({"msg":"user not authorized"});
    }
}

module.exports = {userauth};