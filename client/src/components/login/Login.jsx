import "./Login.scss"

export default function Login(){
  return(
  <div >
    <div class="welcome">
      <h2 className=" text-[2em]">Welcome to <span>  Surveillance Camera Management System</span> !</h2>
    </div>
    <div className="flex justify-between text-[25px] px-[60px] mt-6">
      <h4 class="reg">Register</h4>
      <h4 class="highlight">|</h4>
      <h4 class="sig">Sign in</h4>
    </div>
    <div className="flex justify-between  mt-6 ">
    <form class="reg-form" action="/register" method="POST">
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button class="sub" type="submit">Register</button>
    </form>
    <form class="sig-form" action="/login" method="POST">
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button class="sub" type="submit">Login</button>
    </form>
    </div>
 
</div>
  )
}