const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  text: String,
  day: String,
  reminder: Boolean
}, { timestamps: true });

mongoose.connect(process.env.MONGODB_URI)
  .then(connect => {
    console.log(`MongoDB Connected: ${connect.connection.host}`)
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });

mongoose.Promise = global.Promise;

module.exports = { Tasks: mongoose.model('Tasks', schema) };