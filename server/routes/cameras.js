const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const jwt = require("jsonwebtoken");

module.exports = (db) => {
  router.get("/", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secretKey", (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      } else {
        const userId = decodedToken.userId;
        db.query(
          `SELECT *
        FROM cameras
        WHERE user_id = $1;`,
          [userId]
        ).then((results) => {
          res.status(200).json(results.rows);
        });
      }
    });
  });

  router.post("/setOffline", (req, res) => {
    const cameraId = req.body.cameraId;
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secretKey", (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      } else {
        const userId = decodedToken.userId;
        db.query(
          `UPDATE cameras SET status = 0
        WHERE user_id = $1 AND id = $2;`,
          [userId, cameraId]
        ).then(() => {
          db.query(
            `SELECT *
                FROM cameras
                WHERE user_id = $1;`,
            [userId]
          ).then((results) => {
            res.status(200).json(results.rows);
          });
        });
      }
    });
  });

  router.get("/checkStatus", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secretKey", (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      } else {
        const userId = decodedToken.userId;
        db.query(
          `SELECT *
        FROM cameras
        WHERE user_id = $1 and status = 0;`,
          [userId]
        ).then((results) => {
          console.log(results.rows);
          if (results?.rows.length === 0){
            res.status(200).send("All Cameras are working")
          } else {
            res.status(204).send("Some cameras are down!")
          }
        });
      }
    });
  });

  router.post("/restartCameras", (req, res) => {
     const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secretKey", (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      } else {
        const userId = decodedToken.userId;
        db.query(
          `UPDATE cameras SET status = 1
        WHERE user_id = $1 RETURNING *;`,
          [userId]
        ).then((results) => {
          console.log(results.rows);
          res.status(200).json(results.rows);
        });
      }
    });
  });
  return router;
};
