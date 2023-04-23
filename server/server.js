const express = require("express");
const dotenv = require("dotenv").config()
const db = require("./db/connection");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();
const cookieSession = require("cookie-session");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(
  cookieSession({
    name: "session",
    keys: ["abcEasyAs123"],
  })
);

const loginRoutes = require("./routes/login");

app.use("/", loginRoutes(db));

app.listen(PORT, () => {
  console.log("=======+++++++++", process.env.DB_PORT);
  console.log(`App listening on port ${PORT}`);
});