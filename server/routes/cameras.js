const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const jwt = require('jsonwebtoken');


module.exports = () => {
  router.get("/", (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'secretKey', (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      } else {
        const userId = decodedToken.userId;
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

  router.post("/setOffline", (req, res) => {
    console.log("HITTING SET OFFLINE");
    const cameraId = req.body.cameraId;
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'secretKey', (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      } else {
        const userId = decodedToken.userId;
        console.log("IN ELSE");
        db.query(`UPDATE cameras SET status = 0
        WHERE user_id = $1 AND id = $2;`, [userId, cameraId])
          .then(() => {
            db.query(`SELECT *
                FROM cameras
                WHERE user_id = $1;`, [userId])
              .then((results) => {
                res.status(200).json(results.rows);
              });
          });
      }
    });
  });

  router.get("/checkStatus", (req, res) => {
    console.log("HITTING CHECK STATUS");
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'secretKey', (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      } else {
        const userId = decodedToken.userId;
        db.query(`SELECT *
        FROM cameras
        WHERE user_id = $1;`, [userId])
          .then((results) => {
            const offlineCameras = [];
            results.rows.forEach(camera => {
              if (camera.status === 0) {
                offlineCameras.push(camera);
              }
            });
            if (offlineCameras.length === 0) {
              res.status(200).send("All Cameras Working");
            } else {
              res.status(207).json(offlineCameras);
            }
          });
      }
    });
  });

  return router;
};