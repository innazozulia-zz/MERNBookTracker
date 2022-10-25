require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bookRotes = require("./routs/books");
const userRoutes = require("./routs/user");

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
app.use("/api/user", userRoutes);

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
