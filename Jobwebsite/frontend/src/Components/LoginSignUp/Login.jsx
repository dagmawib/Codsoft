import React from 'react'

function Login() {
  const googleAuth= ()=>{
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <div>
        <section className="login_container" >
        <div className="center">
            <h1 className="log_col">Login</h1>
            <form method="post">
               
              <div className="txt_field">
                <input type="email" name='username' required />
                <span></span>
                <label>Email Address</label>
              </div>
              <div className="txt_field">
                <input type="password" name='password' required />
                <span></span>
                <label>Password</label>
              </div>
              
              
              <div className="pass">Forgot Password?</div>
              
              <input type="submit" value="Login" />
              
              <div className="signup_link">
               <a href="/SignUp"><div>Not a member?</div></a>
              
                <div className='loginButtons'>
                    <div className="submit gray" >Sign Up</div>
                    <div className="submit gray" >Login</div>
                </div>
              </div>
              <div class="col-sm-12">
              <div class="card social-block">
                <div class="card-body">
                  <button onClick={googleAuth}>
                  <a class="btn btn-block"  >
                  {/* href="/auth/google" */}
                    <i class="fab fa-google"></i>
                     Sign Up with Google
                  </a>
                  </button>
                </div>
             </div>
          </div>
            </form>
          </div>
    </section>
    </div>
  )
}

export default Login