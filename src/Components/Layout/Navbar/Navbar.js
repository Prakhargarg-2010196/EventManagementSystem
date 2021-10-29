import './Navbar.css';

import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import React, { Component } from "react";

import AccountIcon from '../../../assets/Account.png';
import Logo from "../../../assets/logo.png";

class NavBar extends Component {
    render() {

        return (

            <Navbar collapseOnSelect expand="lg" className='Navbar' variant="dark">
                <Container >
                    <Navbar.Brand href="/">
                        <Image src={Logo} width={40}></Image>
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end' >
                        <Nav>
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Manage Event</Nav.Link>
                            <Nav.Link href="#pricing">Notifications</Nav.Link>
                            <Nav.Link href="#pricing">Premium</Nav.Link>
                            <Nav.Link href="#pricing"> 
                            <Image src={AccountIcon}/>
                            </Nav.Link>
                            
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )
    }
}


export default NavBar;