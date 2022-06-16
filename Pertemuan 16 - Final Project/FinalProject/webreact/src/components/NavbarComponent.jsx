import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../App.css';
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">RAYES.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/About">About Us</Nav.Link>
                        <Nav.Link href="/Contact">Contact Us</Nav.Link>
                        <Nav.Link href="/Login">Sign In</Nav.Link>
                        <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingBasket} className="fa" /></Nav.Link>
                        <div className="search">
                            <FontAwesomeIcon icon={faSearch} className="fa" />
                            
                        </div>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarComponent