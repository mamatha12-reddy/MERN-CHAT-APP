const JWT=require('jsonwebtoken')
require('dotenv').config()

const generateToken=(id)=>{
  return JWT.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}
module.exports=generateToken