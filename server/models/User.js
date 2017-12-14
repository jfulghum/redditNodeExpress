import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: {5: "username must be 5 characters or more"}
  },
  password: {
    type: String,
    required: true,
    minlength: {8: "password must be 8 characters long"}
  }
})

const User = mongoose.model('User', userSchema)

export default User;