import React, { useState } from "react";
// import "./App.css";
import { useSpring, animated } from "react-spring";
import ReactDOM from 'react-dom'
import SigninForm from './Signin.js'
import Dashboard from './Dashboard';
import SignupForm from './Signup.js'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


const email = ''
const password = ''
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
    backgroundColor: SignupFormStatus ? '#800000' : 'transparent', height: '50%', width: '50%',
    color: SignupFormStatus ? 'white' : 'black', 

    
  });
  const SignupBtnProps = useSpring({
    // borderBottom: SignupFormStatus
    //   ? "solid 2px #1059FF"
    //   : "solid 0px transparent", //Animate bottom border of register button
      backgroundColor: SignupFormStatus ? 'transparent' : '#800000', height: '50%',width: '50%',
      color: SignupFormStatus ? 'black' : 'white', 

      
  });


  function SignupClicked() {
    setSignupFormStatus(true);
  }
  function SigninClicked(e) {
    e.preventDefault()
    console.log("signinclicked from signup")
    setSignupFormStatus(false);

  }

  async function signInCheck(e){
    const username = document.querySelector("#signinemail").value;
    const password = document.querySelector("#password1").value;
    try{
      const user = await Auth.signIn(username,password);
      console.log("sign in success!");
      this.setState({
        user: user
      });
      e.preventDefault()
      ReactDOM.render(<Dashboard/>,document.getElementById("root"));
    } catch (error){
      console.log("Failed signin :" + error);
      e.preventDefault()
      SignupClicked();
    }
  }

  return (
    <div className="animation zoom-in Signin-Signup-wrapper my-5" data-mdb-toggle="animation" data-mdb-animation="zoom-in" data-mdb-animation-start="onLoad">
      <div className="nav-buttons signinup-navbuttons" >
        <animated.button
          onClick={SigninClicked}
          id="SigninBtn"
          style={SigninBtnProps}
        >
          <div class="btn-signin text-center font-weight-bold
">SIGN IN</div>
        </animated.button>
        <animated.button
          onClick={SignupClicked}
          id="SignupBtn"
          style={SignupBtnProps}
        >
          <div class="btn-signup text-center font-weight-bold
">SIGN UP</div>
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="Signinform" style={SigninProps}>
          <SigninForm func = {signInCheck}/>
        </animated.form>
        <animated.form action="" id="Signupform" style={SignupProps}>
          <SignupForm onSignInClick = {SigninClicked}/>
        </animated.form>
        
      </div>
      
     
    </div>
  );
}

export default Signinup;