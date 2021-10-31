import './App.css';

import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

// import ChangePass from './Components/Auth/ChangePass/ChangePass';
import Home from './Components/Layout/Home/Home';
import LoginPage from './Components/Auth/LoginPage/LoginPage';
import NavBar from './Components/Layout/Home/Navbar/Navbar';
import PasswordReset from './Components/Auth/PasswordReset/PasswordReset';
import SignUpPage from './Components/Auth/SignUpPage/SignUpPage';

class App extends Component {
  render() {
    return (
      
      
      <div>
           
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/LogInPage' exact component={LoginPage}></Route>
          <Route path='/SignUpPage' exact component={SignUpPage}></Route>
          <Route path='/PasswordResetPage' exact component={PasswordReset}></Route>
          
      </Switch>
      </div>
      
    )
  }

}
export default App;