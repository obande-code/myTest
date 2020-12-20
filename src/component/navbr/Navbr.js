import React from 'react'
import './Navbr.css'
import logo from '../../assets/mtn-logo-nav.svg'
import { Navbar,
         Nav, 
         NavDropdown,
        } from 'react-bootstrap'
import Search from '../search/Search'

const Navbr = () => {
    return (
        <div>
           <Navbar className='topbar' expand="lg">
            <img style={{width:'50px', height:'50px', margin:"5px 30px"}} src={logo} alt="mtn" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navText mr-auto">
                <NavDropdown className="mx-2" title="Personal" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="mx-2" href="#home">Busines</Nav.Link>
                <NavDropdown className="mx-2" title="Investor" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="mx-2" href="#home">Foundation</Nav.Link>
                <Nav.Link className="mx-2" href="#home">Events</Nav.Link>
                <Nav.Link className="mx-2" href="#home">Busines</Nav.Link>
                <NavDropdown className="mx-2" title="Supply" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="mx-2" href="#home">About Us</Nav.Link>
                <Nav.Link className="mx-2" href="#home">Careers</Nav.Link>
                <NavDropdown className="mx-2" title="Contact Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                < Search />
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbr
