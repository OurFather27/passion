const mongoose = require('mongoose');
const contact = mongoose.Schema(
  {
    fristname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      max: 500,
    },
    phone_number: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("ContactModel", contact);
