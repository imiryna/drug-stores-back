const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("dotenv").config();

const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "drug-stor.firebaseapp.com",
  databaseURL: process.env.DATABASE_URL,
  projectId: "drug-stor",
  storageBucket: "drug-stor.appspot.com",
  messagingSenderId: "561596546010",
  appId: process.env.APP_ID,
  measurementId: "G-H0K3GM6MKE",
};

initializeApp(firebaseConfig);

const indexRouter = require("./routes/shop");
const usersRouter = require("./routes/medicine");

const app = express();

app.set("view engine", "ejs");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
