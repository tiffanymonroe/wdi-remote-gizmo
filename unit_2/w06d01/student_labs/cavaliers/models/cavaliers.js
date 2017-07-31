const mongoose = require('mongoose');
const pupSchema = new mongoose.Schema ({
  human_name: {type: String, required: true},
  cav_name: String,
  color: String,
  sex: String,
  altered: {type: Boolean, required: true}
});

const Pup = mongoose.model("Pup", pupSchema);

module.exports = Pup;
