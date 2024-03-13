import React from 'react'
import './style/sidebar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="navbar-section  p-0 py-sm-2">
            <Navbar variant="light" expand="sm" id="sidebar" className='py-0'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-auto' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-column">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <NavDropdown title="Invesments" id="basic-nav-dropdown">
                            <Link to ="/recurringdeposite" className="nav-link dropdown-list ms-2">--Recurring Deposits</Link>
                            <Link to ="/fixeddeposite" className="nav-link dropdown-list ms-2">--Fixed Deposits</Link>
                        </NavDropdown>

                        <Link to ="/ppf" className="nav-link">WorkingHours</Link>
                        <Link to ="/bank" className="nav-link">Banks</Link>
                        <Link to ="/bankaccount" className="nav-link">Bank Account</Link>
                        <Link to ="/taxespaid" className="nav-link">Taxes Paid</Link>
                        <Link to ="/uploadstatements" className="nav-link">Upload Statements</Link>

                      
                      
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}
