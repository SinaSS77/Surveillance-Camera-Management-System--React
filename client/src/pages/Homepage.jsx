import AuthForm from "../components/forms/AuthForm";

export default function HomePage() {
    return (
        <>
            <AuthForm formType={'register'}></AuthForm>
            <AuthForm formType={'login'}></AuthForm>
        </>
    );
  }