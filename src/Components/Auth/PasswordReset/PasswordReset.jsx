import './PasswordReset.css';

import { Button, FloatingLabel, Form } from 'react-bootstrap';

// import { Link } from 'react-router-dom';
import React from 'react';

const PasswordReset = () => {
    return (

        <Form className='d-flex flex-column justify-content-center'>
            <h1 className=''>Forgot Password ?</h1>
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
                        value={''}
                        onChange={''} />

                </FloatingLabel>

            </Form.Group>

            <Form.Group className="mb-2 form-group " controlId="formBasicOtp">
                <FloatingLabel controlId="floatingPassword" label="OTP">
                    <Form.Control
                        type="password"
                        placeholder="otp"
                        value={''}
                        onChange={''}
                    />
                </FloatingLabel>
            </Form.Group>
            
            <Button
                variant="primary"
                className='mb-2 mt-3  button'
                type="submit"
                onClick={''}>
                Confirm
            </Button>
            
        </Form>


    )
}



export default PasswordReset;