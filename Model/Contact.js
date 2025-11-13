const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  message: String,
  dateTime : String
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;