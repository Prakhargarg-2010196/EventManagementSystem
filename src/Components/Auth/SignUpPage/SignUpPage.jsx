import './SignUpPage.css';

import { Button, FloatingLabel, Form, Image } from 'react-bootstrap';
import React, {useState} from 'react';

import GoogleIcon from '../../assets/google.png';
import { Link } from 'react-router-dom';

const SignUpPage=(props)=>{
    
    const [state , setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {controlId , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [controlId] : value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            // sendDetailsToServer();    
        } else {
            props.showError('Passwords do not match');
        }
    }
        return (
                    
                <Form className='d-flex flex-column justify-content-center'>
                <h1 className=''>Create Account</h1>
                <Button 
                variant="light" 
                className='mb-2 w-100' 
                type="submit"
                onClick={handleSubmitClick}>
                <Image src={GoogleIcon} className="googleIcon"></Image> Sign With Google               
                </Button>
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
                        value={state.email}
                        onChange={handleChange}/>
                   
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
                        value={state.email}
                        onChange={handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Link className="align-self-end"> 
                    <Form.Text >Forgot Password?</Form.Text>
                </Link>
                <Button 
                variant="primary" 
                className='mb-2 w-100 button-signUp' 
                type="submit"
                onClick={handleSubmitClick}>
                    Login
                </Button>
                <Form.Text >Already have an account ?</Form.Text>
                <Link> 
                    <Form.Text>Sign Up</Form.Text>
                </Link>
            </Form>
            
            
        )
    }

export default SignUpPage;