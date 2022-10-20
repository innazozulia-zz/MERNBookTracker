require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bookRotes = require("./routs/books");

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/books", bookRotes);

//connect to DB
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connecting to DB and listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    err;
  });

//listen for requests
// app.listen(process.env.PORT, () => {
//   console.log("listening on port", process.env.PORT);
// });

process.env;
