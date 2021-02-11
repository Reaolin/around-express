const express = require("express");
const userRouter = require("./routers/users");
const cardRouter = require("./routers/cards");


const { PORT = 3000 } = process.env;

const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRouter);
app.use("/cards", cardRouter);

app.get("*", (req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
