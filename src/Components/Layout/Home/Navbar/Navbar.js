import './Navbar.css';

import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import React, { Component } from "react";

import AccountIcon from '../../../../assets/Account.png';
import {Link} from 'react-router-dom';
import Logo from "../../../../assets/logo.png";

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
                        <Link to="/" className='nav-links'>Home</Link>
                            <Nav.Link href="#pricing">Manage Event</Nav.Link>
                            <Nav.Link href="#pricing">Notifications</Nav.Link>
                            <Nav.Link href="#pricing">Premium</Nav.Link>
                            <Link to="/LogInPage" className='nav-links'> 
                            <Image src={AccountIcon}/>
                            </Link>
                            
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )
    }
}


export default NavBar;