const jwt = require("jsonwebtoken")

const verifyToken = async (req , res , next) => {
    const secret = process.env.SECRET;
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res.status(401).json({message:'No token provided'})
  }
  try {
    const decoded = jwt.verify(token , secret)
    const user = await UserModel.findById(decoded._id)
    if (!user) {
      return res.status(404).json({message:'User not found'})
    }
    req.user = user
    next()
  } catch (error) {
    return res.status(403).json({message:'Failed to authenticate token'})
  
  }
  }
  module.exports = verifyToken