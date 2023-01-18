const { Schema, model } = require('mongoose');
const schema = new Schema({
  name: String,
  image: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  sex: {
    type: String,
    enum: ['male', 'female']
  }
}, {
  timestamps: true
});
module.exports = model('User', schema);