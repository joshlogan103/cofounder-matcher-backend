import mongoose from 'mongoose'
import 'dotenv/config.js'

const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URI)

db.on('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})

db.on('disconnected', () => {
  console.log('MongoDB server has been disconnected')
})

db.on('error', (error) => {
  console.error(`There was an error: ${error}`)
})

