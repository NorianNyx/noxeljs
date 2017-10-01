import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import logo from '../../../logo.svg'
import LoginFormContainer from '../../../containers/LoginForm'

class NavBar extends Component {
    render () {
        return (
            <Navbar fixedTop inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Nav>
                    <NavItem>Home</NavItem>
                </Nav>
                <LoginFormContainer />
            </Navbar>
        )
    }
}

export default NavBar