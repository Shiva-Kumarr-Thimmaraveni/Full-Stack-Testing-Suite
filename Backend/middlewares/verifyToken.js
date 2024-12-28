const jwt = require('jsonwebtoken')


const JWT_SECRET = process.env.JWT_SECRET 
const verifyToken = (req, res, next) => {
  const token = req.headers['Authorization']?.split(' ')[1]
  console.log("from backend --->", token)
  if (!token) {
    return res.status(403).json({ message: 'No token provided' })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded 
    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' })
  }
}

module.exports = verifyToken
