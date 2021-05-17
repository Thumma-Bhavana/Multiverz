import './main.css';
import React from 'react'
import Signinup from './Signinup.js'
import ReactDOM from 'react-dom'

// Regex for validating the email it makes sure there is atmost 1 '@' symbol and a '.' after @ and 2 characters after .
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class resetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      errors: {
        email: '',
      }
    };
  }
  loadSigninuppage = () => {
    ReactDOM.render(<Signinup/>,document.getElementById("root"));
  } 

  // Function to check whether the email is valid or not this is done by comparing with regex
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    if (validEmailRegex.test(value)) {
        errors.email = '';
    }
    else {
        errors.email = 'Email is not valid!';
    }
    this.setState({errors, [name]: value});
  }

  render() {
    const {errors} = this.state;
    return (
      <div>
        {/* Creating a card using boostrap predefined class */}
        <div className="card reset-password-card" >
        <div className="card-body reset-password-card-body">
          <h2 className="card-title reset-password-card-title">Reset Your Password</h2>
          <p className="card-text reset-password-card-text">Please enter your email address which you used to create account in Jobverz</p>
          <br/>
          {/* Adding input group with an input field with type as email and a button to submit*/}
          <div className="reset-password-alert-condition">
            {/* Only display alert when the email field is not empty and is invalid */}
          {errors.email.length > 0 && this.state.email != "" && <div class="alert alert-danger reset-password-card-alert" role="alert">{errors.email}</div>}
          </div >
          <br/>
          <div className="input-group mb-3 reset-password-card-input-group">
            <input type="email" name='email' className="form-control reset-password-card-input" placeholder="Enter your email" onChange={this.handleChange} noValidate/>
            <button type="button" className="btn btn-dark reset-password-card-button" onClick={this.loadSigninuppage}>Send Email</button>
          </div>
          </div>
      </div>
    </div>
    );
  }
}

export default resetPassword;
