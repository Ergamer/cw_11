import React, {Fragment} from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import UserMenu from "./Menus/UserMenu";
import AnonymousMenu from "./Menus/AnonymousMenu";

const Toolbar = ({user, logout}) => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <LinkContainer to="/" exact><a>My market</a></LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/" exact>
                    <NavItem>Items</NavItem>
                </LinkContainer>
            </Nav>
            {user ? <UserMenu user={user} logout={logout}/> : <AnonymousMenu/>}
        </Navbar.Collapse>
    </Navbar>
);

export default Toolbar;