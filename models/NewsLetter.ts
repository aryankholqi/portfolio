const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

const newsLetterModel =
  mongoose.models.NewsLetter || mongoose.model("NewsLetter", schema);

export default newsLetterModel;
