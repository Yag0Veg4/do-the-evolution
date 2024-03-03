import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    lastname: String,
    age: Number,
    email: String
})

export default mongoose.model('User', schema)