const express = require("express");
const dotenv = require("dotenv").config();
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

const authRoutes = require("./routes/auth");
const homeRoutes = require("./routes/home");
const camerasRoutes = require("./routes/cameras");

app.use("/api/auth", authRoutes(db));
app.use("/api/home", homeRoutes(db));
app.use("/api/cameras", camerasRoutes(db));

app.listen(PORT, () => {

  console.log(`App listening on port ${PORT}`);
});