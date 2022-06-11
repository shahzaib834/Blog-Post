import { Row, Col, Navbar, Container, Nav, Image } from 'react-bootstrap';
import img from '../logo.png';

import React from 'react';

function Header() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container className='nav-container'>
        <Navbar.Brand href='/'>
          <Image src={img} className='logoImage' />
        </Navbar.Brand>

        <Nav>
          <div className='nav-sub-container'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href=''>Authors</Nav.Link>

            <Nav.Link href=''>Login</Nav.Link>
            <Nav.Link href=''>Sign Up</Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
