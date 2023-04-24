const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

module.exports = (db) => {

  router.get("/", (req, res) => {
  const newEmail = req.body.email;

  db.query(`SELECT * FROM cameras
            JOIN users ON cameras.user_id = users.id
            WHERE users.email = $1;`,[newEmail])
            .then((result) => {
              res.send(result)
            })
            .catch((err) => {
              console.log("this error comes from the camera router:",err);
            })

  });
  return router;
}