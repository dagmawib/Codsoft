import React from 'react'

function Signup() {
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
            <h1 className="log_col">Sign Up</h1>
            <form method="post">
              <div className="txt_field">
                <input type="text" required />
                <span></span>
                <label>Full Name</label>
              </div>
            
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
              <div className="txt_field">
                <input type="password" required />
                <span></span>
                <label>Confirm Password</label>
              </div>
              
              <input type="submit" value="SignUp" />
              
              <div className="signup_link">
              
              <a href="/login"><div>Already have an account?</div></a>
                <div className='loginButtons'>
                    <div className="submit gray" >Sign Up</div>
                </div>
              </div>
              <div className=" theWhole">
                <div className=" firstineer">
                    <div className=" lastOne">
                      <button type="button" class="btn btn-light" onClick={googleAuth}>
                          <i class="fab fa-google"></i>
                           Sign Up with Google
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

export default Signup