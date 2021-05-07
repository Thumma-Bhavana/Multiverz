import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";
import Signinup from './Signinup.js'

class App extends React.Component{
  render(){
    return(<Signinup/>);
  }
}


export default App;