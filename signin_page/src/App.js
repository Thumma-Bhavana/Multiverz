import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";

function App() {
  const [SignupFormStatus, setSignupFormStatus] = useState(false);
  const SigninProps = useSpring({ 
    left: SignupFormStatus ? -500 : 0, // Login form sliding positions
  });
  const SignupProps = useSpring({
    left: SignupFormStatus ? 0 : 500, // Register form sliding positions 
  });

  const SigninBtnProps = useSpring({
    borderBottom: SignupFormStatus 
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of login button
  });
  const SignupBtnProps = useSpring({
    borderBottom: SignupFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of register button
  });

  function SignupClicked() {
    setSignupFormStatus(true);
  }
  function SigninClicked() {
    setSignupFormStatus(false);
  }

  return (
    <div className="Signin-Signup-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={SigninClicked}
          id="SigninBtn"
          style={SigninBtnProps}
        >
          Signin
        </animated.button>
        <animated.button
          onClick={SignupClicked}
          id="SignupBtn"
          style={SignupBtnProps}
        >
          Signup
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
      <animated.div className="forgot-panel" style={SigninProps}>
        <a herf="#">Forgot your password</a>
      </animated.div>
    </div>
  );
}

function SigninForm() {
  return (
    <React.Fragment>
      <label for="username">USERNAME</label>
      <input type="text" id="username" />
      <label for="password">PASSWORD</label>
      <input type="text" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function SignupForm() {
  return (
    <React.Fragment>
      <label for="firstname">First name</label>
      <input type="text" id="firstname" />
      <label for="lastname">Last name</label>
      <input type="text" id="lastname" />
      <label for="email">email</label>
      <input type="text" id="email" />
      <label for="password">password</label>
      <input type="text" id="password" />
      <label for="confirmpassword">confirm password</label>
      <input type="text" id="confirmpassword" />
      <input type="submit" value="submit" class="submit" />
    </React.Fragment>
  );
}

export default App;
