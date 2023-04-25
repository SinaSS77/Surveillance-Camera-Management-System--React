const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const jwt = require('jsonwebtoken');


module.exports = () => {
  router.get("/", (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    let userId;
    jwt.verify(token, 'secretKey', (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      } else {
        userId = decodedToken.userId;
        db.query(`SELECT *
        FROM cameras
        WHERE user_id = $1;`, [userId])
          .then((results) => {
            console.log({ results });
            res.status(200).json(results.rows);
          });
      }
    });
  });

  return router;
};