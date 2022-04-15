import React, { Component } from 'react';
import {Nav,  Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <React.Fragment>
               
            <div>
                <Nav
                    fill
                >
                    <NavItem>
                    <NavLink
                        active
                        href="#"
                    >
                        Link
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#">
                        Another Link
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        disabled
                        href="#"
                    >
                        Disabled Link
                    </NavLink>
                    </NavItem>
                </Nav>
                </div>
                
            </React.Fragment>
            
        );
    }
}

export default Header;