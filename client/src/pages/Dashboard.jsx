import AuthForm from "../components/forms/AuthForm";

export default function HomePage() {
    return (
        <>
        <Card videoUrl={''} cameraTitle={'camera 1'}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
            {/* <AuthForm formType={'register'}></AuthForm>
            <AuthForm formType={'login'}></AuthForm> */}
        </>
    );
  }