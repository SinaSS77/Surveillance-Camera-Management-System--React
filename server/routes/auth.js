const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

module.exports = (db) => {

  router.get("/", (req, res) => {
    if (req.session.userID) {
      return res.redirect("/index");
    }
    return res.render("welcome");
  });


  ///////////////Helper functions /////////////
  const getUserWithEmail = function(email) {
    return db.query(`SELECT * FROM users WHERE users.email = $1;`, [email])
      .then((result) => {
        if (!result) {
          return null;
        }
        return result.rows[0];
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  exports.getUserWithEmail = getUserWithEmail;

  //////////////////////
  const login = function(email, password) {
    return getUserWithEmail(email).then((user) => {
      if (bcrypt.compareSync(password, user.password)) {
        console.log({user})
        return user;
      }
      console.log("RETURNING NULL")
      return null;
    });
  };
  exports.login = login;

  //////////////////
  // Login Routes
  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log('HELLLO WORLD', {email}, {password});
    login(email, password)
      .then((user) => {
        if (!user) {
          res
            .status(400)
            .send("Invalid login, please <a href='/'>try again</a>");
          return;
        }
        res.status(200)
        res.send("Successfull Sign in")
        // req.session.userID = user.id;
        // req.session.userEmail = user.email;
        // return res.redirect("/index");
      })
      .catch((e) => {
        res
          .status(400)
          .send(
            "Please include a valid email/password, please <a href='/'>try again</a>"
          );
        return;
      });
  });
  

  // Register Route
  router.post("/register", (req, res) => {

console.log("hello world");

    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);
    const newEmail = user.email;
    const newPassword = user.password;
    db.query(`SELECT * FROM users WHERE email = $1;`, [newEmail])
      .then((result) => {
        
        if (result.rows.length > 0) {
          return res
            .status(400)
            .send("Email already exists");
        } else {

          db.query(
            `INSERT INTO users (email, password)
               VALUES ($1, $2)
               RETURNING *;`,
            [newEmail, newPassword]
          )
            .then(() => {
              res.status(200)
              res.send("You have registered successfully. Please sign in");

            })
            .catch((err) => {
              console.log("it is the catch part",err);
            });
        };
      }
      );
  });

  return router;

}