const express = require("express");
const pizzasRouter = require("./routes/pizzasRouter");
const indexRouter = require("./routes/indexRouter");
const app = express();

app.use(express.json());

app.use("/", indexRouter);
app.use("/pizzas", pizzasRouter);

app.use(function(req, res, next) {
  res.status(404).json("Sorry can't find that!");
});

app.use(function(err, req, res, next) {
  res.status(500).json("My bad! try again later");
});

module.exports = app;

