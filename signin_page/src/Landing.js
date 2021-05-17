
import './main.css';
import { BrowserRouter as Router, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Signinup from './Signinup.js';
import Dashboard from './Dashboard.js';
import React from 'react';
import ReactDOM from 'react-dom'

class Landing extends React.Component {
  constructor (props) {
    super(props)
  }

  loadSignin = () => {
    ReactDOM.render(<Signinup/>,document.getElementById("root"));
  }

  loadDashboard = () =>{
    return(<Dashboard />);
  }

  returnSignin = () =>{
    return(<Signinup />);
  }

  render(){
    return(
      <Router>
        <div>
          <Route path="/" exact component={this.renderHTML}/>
          <Route path="/dashboard" exact component={this.loadDashboard}/>
          <Route path="/Signin" exact component={this.returnSignin}/>
        </div>
      </Router>
    )
  }
  renderHTML = () => {
    return (   
      <div>
      <div class="maincard">
        <div class="main-card-body">
        <h3 class="card-title">Welcome to Jobverz</h3>
        <p class="card-text"><strong>Select your role to proceed!</strong></p>
        <br/>
        <div class="row landing-row mx-2">
        <div class="col landing-col my-2">
          <div class="card">
            <div class="card-body landing-body">
              <h5 class="card-title">Users</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <br/>
              <button class="btn btn-primary landing-btn" onClick={this.loadSignin}>Proceed</button>
            </div>
          </div>
        </div>
        <div class="col landing-col my-2">
          <div class="card">
            <div class="card-body landing-body">
              <h5 class="card-title">Government</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <br/>
              <a href="#" class="btn btn-primary landing-btn">Proceed</a>
            </div>
          </div>
        </div>
        <div class="col landing-col my-2">
          <div class="card">
            <div class="card-body landing-body">
              <h5 class="card-title">Company</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <br/>
              <a href="#" class="btn btn-primary landing-btn">Proceed</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>     
      );
    }
}

export default Landing;
