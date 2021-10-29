import './App.css';

import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import ChangePass from './Components/Auth/ChangePass/ChangePass';
import NavBar from "./Components/Layout/Navbar/Navbar";

// import PasswordReset from './Components/PasswordReset/PasswordReset';

// import CardCarousel from './Components/Layout/CardCarousel/CardCarousel';
// import Footer from './Components/Layout/Footer/Footer';

// import LoginPage from './Components/LoginPage/LoginPage';


// import SignUpPage from './Components/SignUpPage/SignUpPage';

class App extends Component {
  render() {
    return (
      
      
      
      <Switch>
          <Route exact path='/'component={NavBar}></Route>    
          <Route exact path='' component={ChangePass}></Route>
          
      </Switch>
    )
  }

}
export default App;