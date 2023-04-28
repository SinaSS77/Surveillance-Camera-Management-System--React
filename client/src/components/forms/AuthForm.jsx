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

export default function AuthForm({ formType, setFormType, setLoggedInUserEmail, setUserIsLoggedIn }) {
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
          if (token) {
            Cookies.set('token', token, { httpOnly: true });
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          } else {
            axios.defaults.headers.common['Authorization'] = null;
          }
          setUserIsLoggedIn(true)
          setLoggedInUserEmail(email);
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
    <>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
      <Typography variant="h3" align="center" sx={{
        fontSize: '3rem',
        fontWeight: '600',
        textAlign: 'center',
        color: 'purple.700',
        textDecoration: 'underline wavy',
        textTransform: 'uppercase'
      }}>
        Sign in
      </Typography>
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
  </div>
{/* // ); */}
 {/* <div className="relative flex flex-col justify-center min-h-screen overflow-hidden z-20">
<div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
  <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
    Sign in
  </h1>
  <form className="mt-6">
    <div className="mb-2">
      <label
        htmlFor="email"
        className="block text-sm font-semibold text-gray-800"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>
    <div className="mb-2">
      <label
        htmlFor="password"
        className="block text-sm font-semibold text-gray-800"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </div>
 
    <div className="mt-6"> */}

      {/* <Button
      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        type="submit"
        variant="contained"
        color="primary"
        // className={classes.button}
        onClick={handleAuthBtnClick}
      >
        {buttonText}
      </Button>
      <Typography variant="body2" align="center">
        {formTypeText.text}
        <span onClick={switchFormType} className=" mt-8" style={{ textDecoration: 'underline', cursor: 'pointer', marginTop: '20px' }}>
          {formTypeText.textClickable}
        </span>
      </Typography>
    </div>
  </form>

</div>
</div> */}
</>
);
}
