const express = require("express");
const router = express.Router();
const db = require("../db/connection");



module.exports = () => {
  router.get("/" , (req,res) => {
    if(!req.session.userID){
      return res.redirect("/");
    }
    const userEmail = req.session.userEmail;
    db.query(`SELECT camera_name
                     FROM cameras
                     WHERE user_id = $1;`,[req.session.userID])
    .then((results) => {
      return res.render("index",{userEmail})
    })
  })

  return router;
}