import School from '../models/schoolModel.js' 

// Get all schools

export const getAllSchools = async (req, res) => {
  try {
    const schools = await School.find({})

    if (!schools) {
      return res.status(404).json({
        error: `No schools found`
      })
    }

    res.json(schools
    )

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Get one School by ID

export const getSchoolById = async (req, res) => {
  try {
    const { id } = req.params

    const school = await School.findById(id)

    if (!school) {
      return res.status(404).json({
        error: `School not found`
      })
    }

    res.json(school)

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Create a School

export const createSchool = async (req, res) => {
  try {
    const schoolData = req.body

    if (!schoolData.length === 0) {
      return res.status(401).json({
        error: `No School data found`
      })
    }

    const schoolCreated = await School.create(schoolData)

    if (!schoolCreated) {
      return res.status(404).json({
        error: `School was not able to be created`
      })
    }

    res.json({
      message: `School ${schoolData.name} was created successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Update a School by ID

export const updateSchoolById = async (req, res) => {
  try {
    const { id } = req.params
    const schoolData = req.body

    const schoolToUpdate = await School.findById(id)

    if (!schoolToUpdate) {
      return res.status(404).json({
        error: `Could not find a School with ID ${id}`
      })
    }

    Object.entries(schoolData).forEach(([key, value]) => {
      schoolToUpdate[key] = value
    })
    
    await schoolToUpdate.save()

    res.json({
      message: `School ${schoolData.name} was updated successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Delete School by ID

export const deleteSchoolById = async (req, res) => {
  try {
    const { id } = req.params

    const schoolToDelete = await School.findByIdAndDelete(id)

    if (!schoolToDelete) {
      return res.status(404).json({
        error: `School not found and was not deleted`
      })
    }

    res.json({
      message: `School was deleted successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}