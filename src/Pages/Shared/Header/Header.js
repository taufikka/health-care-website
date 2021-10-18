import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, logOut } = useFirebase();
    console.log(user)

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

                        {
                            user?.email ? <Link to='/'> <button onClick={logOut} className='mx-2 btn-danger'>Log out</button> </Link>
                                :
                                <NavLink activeStyle={activeStyle} className='nav' to="/login">Login</NavLink>
                        }

                        <Navbar.Text>
                            Logged in as: <small className='fw-bold'>{user?.displayName}</small>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;