// import "./Login.scss"
import axios from "axios";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const useAuthFormStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: '200px',
  },
  textField: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AuthForm({ formType, setFormType }) {
  const classes = useAuthFormStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonText = formType === "login" ? "Sign In" : "Sign Up";
  const apiUrl = formType === "login" ? "login" : "register";
  const formTypeText = formType === "login" ? { text: "Not a user? ", textClickable: "Register" } : { text: "Already a user? ", textClickable: "Login" };

  const handleAuthBtnClick = (e) => {
    const authInfo = {
      email, password
    };
    axios.post(`http://localhost:8080/api/auth/${apiUrl}`, authInfo)
      .then(response => {
        if (response.status === 200) {
          const token = response.data;
          Cookies.set('token', token, { httpOnly: true });
          if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          } else {
            axios.defaults.headers.common['Authorization'] = null;
          }
          navigate('/dashboard');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const switchFormType = () => {
    const newFormType = formType === "login" ? "register" : "login";
    setFormType(newFormType);
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
      <Typography variant="body2" align="center">
        {formTypeText.text}
        <span onClick={switchFormType} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          {formTypeText.textClickable}
        </span>
      </Typography>
    </div>
  );
}
