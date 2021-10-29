import './LoginPage.css';

import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import React, {Component} from 'react';

class LoginPage extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          isLogged: false,
          loginParams: {
            user_id: "",
            user_password: ""
          }
        };
    }
    handleFormChange = event => {
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
          loginParams: loginParamsNew
        });
      };
      login = event => {
        let user_id = this.state.loginParams.user_id;
        let user_password = this.state.loginParams.user_password;
        console.log(user_password);
        if(user_id==='admin'&& user_password==='123')
        return <Redirect to="/" />;
        event.preventDefault();
      };
      
    render()
        {
            
            return (
                <div>
                    <Form className='d-flex flex-column justify-content-center'>
                <h1 className=''>LogIn</h1>
                <Form.Group className="mb-3 form-group " controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control 
                        type="email" 
                        
                        className='mt-3 form-group' 
                        placeholder="name@example.com" 
                        value={this.state.user_id}
                        onChange={this.handleFormChange}/>
                   
                    </FloatingLabel>

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 form-group " controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={this.state.user_password}
                        onChange={this.handleFormChange}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Link  to="/PasswordResetPage" className="align-self-end"> 
                    <Form.Text >Forgot Password?</Form.Text>
                </Link>
                <Button 
                variant="primary" 
                className='mb-2 w-50' 
                type="submit"
                onClick={this.login}>
                    Login
                </Button>
                <Form.Text style={{display:""}}>Don't have an account ?</Form.Text>
                <Link to="/SignUpPage"> 
                    <Form.Text>Sign Up</Form.Text>
                </Link>
            </Form>
            
                </div> 
                
            
        )
    }
}
export default LoginPage;