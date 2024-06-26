import User from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const { SECRET } = process.env

// Allow a user to sign up

export const signup = async (req, res) => {
  try {
    const userData = req.body

    if (!userData.email || !userData.password) {
      return res.status(400).json({
        error: `Email and password must all be provided: ${error}`
      })
    }

    const newUser = await User.create(userData)

    if (!newUser) {
      return res.status(406).json({
        error: `${userData.email} was not created`
      })
    }

    res.json({
      message: `${newUser.email} was created successfully`
    })


  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Allow a user to login

export const login = async (req, res) => {
  try {
    const userData = req.body

    if (!userData.email || !userData.password) {
      return res.status(406).json({
        error: `Email and password must be provided to login`
      })
    }

    const user = await User.findOne({ email: userData.email })

    if (!user) {
      return res.status(404).json({
        error: `Could not find a user in database with email address ${userData.email}`
      })
    }

    const validUser =  bcrypt.compareSync(userData.password, user.password)

    if (!validUser) {
      return res.status(401).json({
        error: `Password does not match`
      })
    }

    const payload = { email: user.email, userId: user._id }

    const accessToken = jwt.sign(
      payload,
      SECRET,
      { expiresIn: '1d'}
    )

    res.json({
      accessToken: accessToken
    })
    
  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Verifiy that a user is logged in

export const verifyLoggedIn = (req, res) => {
  try {
    res.json(true)
  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

