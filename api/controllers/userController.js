import User from '../models/userModel.js'

// Get all users

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})

    if (!users) {
      return res.status(404).json({
        error: `No users found`
      })
    }

    res.json(users)

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Get one user by ID

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findById(id)

    if (!user) {
      return res.status(404).json({
        error: `User not found`
      })
    }

    res.json(user)

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Create a user

export const createUser = async (req, res) => {
  try {
    const userData = req.body

    if (!userData.length === 0) {
      return res.status(401).json({
        error: `No user data found`
      })
    }

    const userCreated = await User.create(userData)

    if (!userCreated) {
      return res.status(404).json({
        error: `User was not able to be created`
      })
    }

    res.json({
      message: `User ${userData.username} was created successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Update a user by ID

export const updateUserById = async (req, res) => {
  try {
    const { id } = req.params
    const userData = req.body

    const userToUpdate = await User.findById(id)

    if (!userToUpdate) {
      return res.status(404).json({
        error: `Could not find a user with ID ${id}`
      })
    }

    Object.entries(userData).forEach(([key, value]) => {
      userToUpdate[key] = value
    })
    
    await userToUpdate.save()

    res.json({
      message: `User ${userData.name} was updated successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Delete user by ID

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params

    const userToDelete = await User.findByIdAndDelete(id)

    if (!userToDelete) {
      return res.status(404).json({
        error: `User not found and was not deleted`
      })
    }

    res.json({
      message: `User was deleted successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}