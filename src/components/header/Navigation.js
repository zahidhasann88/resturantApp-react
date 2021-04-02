import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    NavbarToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <div>
            <Navbar dark color="dark" expand="sm">
            <div className="container">
            <NavbarToggler onClick={this.NavbarToggle} />
               <NavbarBrand href="/">Berney's</NavbarBrand>
               <Collapse isOpen={this.state.isNavOpen} navbar>
               <Nav className="mr-auto" navbar>
               <NavItem>
                   <Link to="/" className="nav-link active">Home</Link>
               </NavItem>
               <NavItem>
                   <Link to="/menu" className="nav-link">Menu</Link>
               </NavItem>
               <NavItem>
                   <Link to="/about" className="nav-link">About</Link>
               </NavItem>
               <NavItem>
                   <Link to="/contact" className="nav-link">Contact</Link>
               </NavItem>
               </Nav>
               </Collapse>
               </div>
            </Navbar>
            </div>
             );
    }
}

export default Navigation;