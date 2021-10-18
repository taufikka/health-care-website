import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Evercare Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink activeStyle={activeStyle} className='nav' to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className='nav' to="/about">About Us</NavLink>
                        <NavLink activeStyle={activeStyle} className='nav' to="/contact">Contact Us</NavLink>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;