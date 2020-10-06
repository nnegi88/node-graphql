const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://test:test@cluster0.lzmfk.mongodb.net/node-graphql?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then();

// Connected handler
mongoose.connection.on("connected", function (err) {
  console.log("Connected to DB");
});

// Error handler
mongoose.connection.on("error", function (err) {
  console.log(err);
});

module.exports = mongoose;
