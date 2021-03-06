import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Me from '../data/me.jpg'
const Header = () => (
    <div>
        <Navbar className="topBar" color="white" light expand="md" style={{"pointerEvents": "none", "cursor": "default"}}>
            <NavbarBrand href="/" className="navBarFont"><img src={ Me } className="me" alt="Cameron Day"></img>Cameron Day</NavbarBrand>
        </Navbar>
    </div>
)
export default Header



// WEBPACK FOOTER //
// ./src/components/header.js