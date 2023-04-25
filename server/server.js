const express = require("express");
const dotenv = require("dotenv").config()
const db = require("./db/connection");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();
const cookieSession = require("cookie-session");
const cors = require('cors');

app.set("view engine", "ejs");

app.use(cors());

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

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// });

const authRoutes = require("./routes/auth");
const homeRoutes = require("./routes/home");

app.use("/api/auth", authRoutes(db));
app.use("/api/home", homeRoutes(db));

app.listen(PORT, () => {
  
  console.log(`App listening on port ${PORT}`);
});