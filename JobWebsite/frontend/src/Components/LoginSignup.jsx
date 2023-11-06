import React, { useState } from 'react'


function LoginSignup() {
    const [action,setAction] = useState("Login")
  return (
    <>
    <section className="login_container" >
        <div className="center">
            <h1 className="log_col">{action}</h1>
            <form method="post">
                {action==="Login"?<div></div>:<div className="txt_field">
                <input type="text" required />
                <span></span>
                <label>Full Name</label>
              </div>}
            
              <div className="txt_field">
                <input type="email" required />
                <span></span>
                <label>Email Address</label>
              </div>
              <div className="txt_field">
                <input type="password" required />
                <span></span>
                <label>Password</label>
              </div>
              {action==="Login"?<div></div>:<div className="txt_field">
                <input type="password" required />
                <span></span>
                <label>Confirm Password</label>
              </div>}
              
              {action==="Sign Up"?<div></div>:<div className="pass">Forgot Password?</div>}
              
              <input type="submit" value={action} />
              
              <div className="signup_link">
              {action==="Sign Up"?<div></div>:<div>Not a member?</div>}
              {action==="Login"?<div></div>:<div>Already have an account?</div>}
                <div className='loginButtons'>
                    <div className={action==="Login" ? "submit " : "submit gray"} onClick={() =>{setAction("Sign Up")}} >Sign Up</div>
                    <div className={action==="Sign Up" ? "submit " : "submit gray"} onClick={() =>{setAction("Login")}}>Login</div>
                </div>
              </div>
            </form>
          </div>
    </section>
    </>
  )
}

export default LoginSignup