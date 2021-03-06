
import React from "react";
import "./main.css";
import ResetPassword from "./ResetPassword.js"
import ReactDOM from 'react-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Dashboard from './Dashboard';

class SigninForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showPassword : false,
      // showMessage: false,
    }
  }
  loadForgetPassword = () => {
    ReactDOM.render(<ResetPassword/>,document.getElementById("root"));
  }  
    onClickPasswordHandler = () => {
      this.setState({showPassword:!this.state.showPassword})
    }
    
    loadDashboard = (e) => {
      console.log("loadDashboard clicked")
       e.preventDefault()
      ReactDOM.render(<Dashboard/>,document.getElementById("root"));
    }

  // showmessage = () =>   {
  //     this.setState({ showMessage: true });
  //     setTimeout(
  //       () => this.setState({ showMessage: false }),
  //       5000
  //     );
  //   }
  render() {
  return (

    <div className="signin">
      {/* <div>
        
        <button onClick={e => {this.showmessage()}}>Show Flash Message</button>
   
          { this.state.showMessage &&  
            <div className="flashdiv">
             <FlashMessage duration={5000}>
              <strong>Hello Therichpost!</strong>
             </FlashMessage>
           </div>
           }
   
      </div>   */}
      <center>
        Sign in using your Social accounts.<br/><br/>
      </center>
      <div class="Social">
        <div className="linkedin" align="center">
        <button className="btn btn-primary col-8 col-sm-5 btnlinkedinsignin">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          {/* </svg> Sign up using Linkedin */}
          </svg> LinkedIn Sign in
          </button>
        </div>
        <div className="col mt-1 d-sm-inline"> <center>
          <button className="btn btn-primary col-8 col-sm-5 mx-2 my-2 btngooglesignin">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            {/* </svg> Sign up using Google */}
            </svg> Google Sign in
          </button>
          <button className="btn btn-primary col-8 col-sm-5 mx-2 my-2 btnfbsignin">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            {/* </svg> Sign up using Facebook */}
            </svg> Facebook Sign in
            </button>  </center>  
        </div>
      </div>
      <center>
      {/* <h3>-------------------or-------------------</h3>       */}
      {/* <hr/> */}


      <h5>----- or -----</h5>
      <br/></center>

      {/* <React.Fragment> */}
        <center>
      <form className="col-8 input-form" id="signinForm" action="/dashboard" onSubmit={this.loadDashboard}>  
        <input type="email"  class="form-control" placeholder="Email Address" id="signinemail" title="eg: username@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>  
        {/* <input type="password" id="userpswd" placeholder='Password' minlength="8" required/> */}
        <div className="signinparentpwd">
        <input type={this.state.showPassword ? "text" : "password"} class="form-control" placeholder="Password" id="password1"  aria-label="Recipient's username" aria-describedby="togglePassword1" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$" required/>
        <div className="signinchildpwd">
          {/* <i class="far fa-eye-slash" onClick = {this.onClickPasswordHandler} id="togglePassword1"></i> */}
          {this.state.showPassword ? <FaEye onClick = {this.onClickPasswordHandler}/> : <FaEyeSlash onClick = {this.onClickPasswordHandler}/>}
        </div>
        </div>  
        
        <p  className="my-4 signinterms"> By clicking Sign in you agree to our terms of use, and our privacy.</p>
        
        {/* <button className="btn btn-lg btn-primary signup-btn" onClick={this.loadDashboard}> */}
        <button id="signup-btn" className="btn btn-lg btn-primary signup-btn" type="submit"> 
        SIGN IN
        </button>       
      </form>      
      </center>
      {/* </React.Fragment> */}      
      <div class="forgot-text" align="center">
            {/* <hr size="30"/> */}
            <p className="RedirectResetPassword" onClick={this.loadForgetPassword}><u>Forgot password?</u></p>            
      </div>
    </div>
  ); 
  }
}

export default SigninForm;