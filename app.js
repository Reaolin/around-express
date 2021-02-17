const express = require("express");
const userRouter = require("./routers/users");
const cardRouter = require("./routers/cards");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');


const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(helmet());

// connect to the MongoDB server
mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
    useFindAndModify: false
});

app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133' // paste the _id of the test user created in the previous step
  };

  next();
});


// connecting to routes
app.use("/users", userRouter);
app.use("/cards", cardRouter);

//page not found
app.get("*", (req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
