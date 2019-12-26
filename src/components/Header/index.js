import React from 'react';
import { Navbar } from 'react-bootstrap';
import {FaBookReader} from 'react-icons/fa';
// import { Container } from './styles';

const Header = (props) => {
  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <FaBookReader size={32}/>
      <span className="m-3">Biblia Online</span>
    </Navbar.Brand>
  </Navbar>
  )
};

export default Header;
