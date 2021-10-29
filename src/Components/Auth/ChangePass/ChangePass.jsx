import './ChangePass.css';

import { Button, FloatingLabel, Form } from 'react-bootstrap';

// import { Link } from 'react-router-dom';
import React from 'react';

const ChangePass = () => {
    return (

        <Form className='d-flex flex-column justify-content-center'>
            <h1 className=''>Change Password ?</h1>
            <Form.Group className="mb-3 form-group " controlId="formBasicPassword">
                <FloatingLabel
                    controlId="floatingInput"
                    label="New Password"
                    className="mb-3"
                >
                    <Form.Control
                        type="password"

                        className='mt-3 form-group'
                        placeholder=""
                        value={''}
                        onChange={''} />

                </FloatingLabel>

            </Form.Group>

            <Form.Group className="mb-2 form-group " controlId="formBasicPassword">
                <FloatingLabel controlId="floatingPassword" label="Confirm Password">
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
                Reset Password
            </Button>
            
        </Form>


    )
}



export default ChangePass;