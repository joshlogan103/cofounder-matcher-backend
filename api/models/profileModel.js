import mongoose from "mongoose";
import School from './schoolModel.js'

const Schema = mongoose.Schema

const ObjectId = mongoose.Types.ObjectId

const locationSchema = new Schema({
  country: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  }
})

const socialMediaSchema = new Schema({
  linkedinUrl: {
    type: String
  },
  twitterUrl: {
    type: String
  },
  instagramUrl: {
    type: String
  }
})

const profileSchema = new Schema({
  userId: {
    type: ObjectId,
    ref: 'user',
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  lastSeen: {
    type: Date
  },
  aboutMe: {
    type: String,
    required: true
  },
  connectionInterest: {
    type: String,
    required: true
  },
  industryInterests: {
    type: [{
      type: String,
      enum: [
        'Agriculture',
        'Art & Design',
        'Artificial Intelligence',
        'Augmented Reality',
        'Biotechnology',
        'Blockchain',
        'Consumer Retail',
        'Cryptocurrency',
        'Defense & Space',
        'Education',
        'Energy',
        'Entertainment',
        'Environmental',
        'Fashion',
        'Finance',
        'Food & Beverage',
        'Gaming',
        'Government',
        'Healthcare',
        'Hospitality',
        'Legal',
        'Logistics',
        'Machine Learning',
        'Manufacturing',
        'Media',
        'Non-Profit',
        'Pharmaceuticals',
        'Publishing',
        'Real Estate',
        'Sports',
        'Tech',
        'Telecommunications',
        'Tourism',
        'Transportation',
        'Virtual Reality',
        'Other'
      ]
    }],
    required: false
  },
  interestedInBeingACofounder: {
    type: Boolean,
    required: true
  },
  currentSchool: {
    type: ObjectId,
    ref: 'School',
    required: true,
  },
  programType: {
    type: String,
    enum: [
      'Business',
      'Law',
      'Medicine/Health Sciences',
      'Engineering',
      'Education',
      'Social Sciences',
      'Computer Science',
      'Arts and Design',
      'Environmental Studies',
      'Public Administration',
      'Other'
    ],
    required: true
  },
  birthDate: {
    type: Date
  },
  profilePicture: {
    type: String
  },
  previousEducation: {
    type: String
  },
  employmentHistory: {
    type: String
  },
  schedulingUrl: {
    type: String
  },
  hasIdea: {
    type: String,
    enum: [
      "Committed to an idea",
      "Have ideas but not committed",
      "Don't have an idea yet"
    ],
    required: true
  },
  potentialIdeas: {
    type: [String]
  },
  areasOfResponsibility: {
    type: [{
      type: String, enum: [
        'Business Strategy',
        'Product Development',
        'Marketing and Sales',
        'Technology and Engineering',
        'Operations',
        'Finance and Fundraising',
        'Legal and Compliance'
      ]
    }],
    required: false
  },
  cofounderDesiredQualities: {
    type: [String]
  },
  technical: {
    type: Boolean
  },
  impressiveAccomplishmnet: {
    type: String,
  },
  location: {
    type: locationSchema
  },
  socialMedia: {
    type: socialMediaSchema
  }
}, { timestamps: true })

profileSchema.post('save', function (doc) {
  if (doc.isModified('firstName') || doc.isModified('lastName')) {
    doc.fullName = `${firstName} ${lastName}`
  }
})

profileSchema.post('save', async function (doc) {
  const schoolId = doc.currentSchool
  const profilesArray = await Profile.find({ currentSchool: schoolId })

  if (profilesArray.length === 0) {
    console.log('No schools found')
  }
  console.log(schoolId)

  const countOfStudents = profilesArray.length

  const schoolToUpdate = await School.findById(schoolId)

  if (!schoolToUpdate) {
    console.log('Could not find a school to update')
  }

  schoolToUpdate.numberOfProfiles = countOfStudents

  const updatedSchool = await schoolToUpdate.save()
  console.log(updatedSchool)

  if (!updatedSchool) {
    console.log(`Failed to update school's number of students`)
  }
})

profileSchema.post("findOneAndDelete", async function (doc) {
  const schoolId = doc.currentSchool

  const schoolToUpdate = await School.findById(schoolId)

  if (!schoolToUpdate) {
    console.log('Could not find a school to update')
  }

  schoolToUpdate.numberOfProfiles -= 1 

  const updatedSchool = await schoolToUpdate.save()
  console.log(updatedSchool)

  if (!updatedSchool) {
    console.log(`Failed to update school's number of students`)
  }
})

const Profile = mongoose.model('Profile', profileSchema)

export default Profile