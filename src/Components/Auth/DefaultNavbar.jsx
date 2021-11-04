import { Container, Image, Nav, Navbar } from "react-bootstrap"

import { Link } from "react-router-dom"
import React from "react"

export const DefaultNavbar = (props) => {
    return (
        <Navbar expand="lg" className={props.style.Navbar} variant="dark">
            <Container >
                <Navbar.Brand>
                    <Link to={props.links.home}><Image src={props.image.src} width={props.image.width}></Image></Link>
                </Navbar.Brand>
                <Nav>
                    <Link to={props.links.secondLink} className={props.style.navLinks}>{props.links.secondLinkName}</Link>
                </Nav>

            </Container>
        </Navbar>
    )
}