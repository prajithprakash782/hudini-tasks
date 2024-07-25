import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo_image from "../assests/logo.png"
import profile from "../assests/profile.png"

function Header() {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink className="d-flex align-items-center text-decoration-none text-light fw-bold fs-5" to="/">
                        <img
                            alt="logo"
                            src={logo_image}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}

                        Hudini</NavLink>
                    <Nav className='d-flex align-items-center' >
                        <NavLink style={{ textDecoration: "none" }} className='ms-4' to="/">Home</NavLink>
                        <NavLink style={{ textDecoration: "none" }} className='ms-4' to="/about">About</NavLink>
                        <NavLink style={{ textDecoration: "none" }} className='ms-4' to="/contact">Contact</NavLink>

                        {isAuthenticated ? (
                            <div className='d-flex align-items-center'>
                                <div className='ms-3'>
                                    <img width={30} height={30} src={profile} alt="" />
                                    <Link style={{ textDecoration: "none" }} to="/users">Users Page</Link>
                                </div>
                                <button className='ms-3' onClick={handleLogout}>Logout</button>
                                
                            </div>
                        ) : (
                            <button className='ms-5' onClick={handleLogin}>Login</button>
                        )}


                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header