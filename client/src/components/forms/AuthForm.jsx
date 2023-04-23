// import "./Login.scss"
import axios from "axios";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';


const useAuthFormStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AuthForm({formType}) {
  const classes = useAuthFormStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonText = formType === "login" ? "Sign In" : "Sign Up"
  const apiUrl = formType === "login" ? "login" : "register"

  const handleAuthBtnClick = (e) => {
    const authInfo = {
      email, password
    };
    axios.post(`http://localhost:8080/api/auth/${apiUrl}`, authInfo)
      .then(response => {
        console.log(response.data);
        console.log(response.status);
      })
      .catch(error => {
        console.error(error);
      });
    console.log("SUBMITTED", { email }, { password });
  };

  return (
    <div className={classes.form}>
      <TextField
        label="Email"
        variant="outlined"
        className={classes.textField}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        className={classes.textField}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleAuthBtnClick}
      >
        {buttonText}
      </Button>
    </div>

    //   <div >
    //     <div class="welcome">
    //       <h2 className=" text-[2em]">Welcome to <span>  Surveillance Camera Management System</span> !</h2>
    //     </div>
    //     <div className="flex justify-between text-[25px] px-[60px] mt-6">
    //       <h4 class="reg">Register</h4>
    //       <h4 class="highlight">|</h4>
    //       <h4 class="sig">Sign in</h4>
    //     </div>
    //     <div className="flex justify-between  mt-6 ">
    //     <form class="reg-form" action="/register" method="POST">
    //       <input name="email" type="email" placeholder="Email" />
    //       <input name="password" type="password" placeholder="Password" />
    //       <button class="sub" type="submit">Register</button>
    //     </form>
    //     <form class="sig-form" action="/login" method="POST">
    //       <input name="email" type="email" placeholder="Email" />
    //       <input name="password" type="password" placeholder="Password" />
    //       <button class="sub" type="submit">Login</button>
    //     </form>
    //     </div>

    // </div>
  );
}
