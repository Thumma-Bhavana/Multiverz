import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";
import SigninForm from './Signin.js'
import SignupForm from './Signup.js'
function Signinup() {
  const [SignupFormStatus, setSignupFormStatus] = useState(false);
  const SigninProps = useSpring({ 
    left: SignupFormStatus ? -500 : 0, // Login form sliding positions
  top: '0px',
  });
  const SignupProps = useSpring({
    left: SignupFormStatus ? 0 : 500, // Register form sliding positions 
  });

 const SigninBtnProps = useSpring({
    // borderBottom: SignupFormStatus 
    //   ? "solid 0px transparent"
    //   : "solid 2px #1059FF",  //Animate bottom border of login button
    backgroundColor: SignupFormStatus ? '#80BFFF ' : 'transparent', height: '50%', width: '50%'
    
  });
  const SignupBtnProps = useSpring({
    // borderBottom: SignupFormStatus
    //   ? "solid 2px #1059FF"
    //   : "solid 0px transparent", //Animate bottom border of register button
      backgroundColor: SignupFormStatus ? 'transparent' : '#80BFFF ', height: '50%',width: '50%'
      
  });


  function SignupClicked() {
    setSignupFormStatus(true);
  }
  function SigninClicked() {
    setSignupFormStatus(false);
  }

  return (
    <div className="animation zoom-in Signin-Signup-wrapper" data-mdb-toggle="animation" data-mdb-animation="zoom-in" data-mdb-animation-start="onLoad">
      <div className="nav-buttons" >
        <animated.button
          onClick={SigninClicked}
          id="SigninBtn"
          style={SigninBtnProps}
        >
          <div class="btn-signin text-center">SIGN IN</div>
        </animated.button>
        <animated.button
          onClick={SignupClicked}
          id="SignupBtn"
          style={SignupBtnProps}
        >
          <div class="btn-signup text-center">SIGN UP</div>
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="Signinform" style={SigninProps}>
          <SigninForm />
        </animated.form>
        <animated.form action="" id="Signupform" style={SignupProps}>
          <SignupForm />
        </animated.form>
        
      </div>
      
     
    </div>
  );
}

export default Signinup;