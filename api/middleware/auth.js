import "dotenv/config.js"
import jwt from "jsonwebtoken"


export const verifyAuth = (req, res, next) => {

  const { authorization } = req.headers;
  const token = authorization && authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      error: 'No token provided'
    })
  }
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        error: 'Invalid token'
      })
    }
    req.user = user
    next()
  })
}

