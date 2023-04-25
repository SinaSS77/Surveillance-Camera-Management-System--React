import { useState } from "react";
import AuthForm from "../components/forms/AuthForm";

export default function HomePage({setLoggedInUser}) {
    const [formType, setFormType] = useState('login')
    
    return (
        <AuthForm formType={formType} setFormType={setFormType} setLoggedInUser={setLoggedInUser}></AuthForm>
    );
  }