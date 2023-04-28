import { useState } from "react";
import AuthForm from "../components/forms/AuthForm";

export default function HomePage({setLoggedInUserEmail, setUserIsLoggedIn}) {
    const [formType, setFormType] = useState('login')
    
    return (
        <AuthForm formType={formType} setFormType={setFormType} setLoggedInUserEmail={setLoggedInUserEmail} setUserIsLoggedIn={setUserIsLoggedIn}></AuthForm>
    );
  }