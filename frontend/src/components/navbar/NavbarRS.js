import React from 'react'
import {  Nav, Navbar } from 'rsuite';
import 'rsuite/dist/rsuite.css'
import HomeIcon from '@rsuite/icons/legacy/Home';
import {logo} from '../../assets/logo.svg'
import { useNavigate} from 'react-router-dom';

// const Navbar = ({ active, onSelect, ...props }) => {
//   return (
//     <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 50 }}>
//       <Nav.Item eventKey="home" icon={<HomeIcon />}>
//         Home
//       </Nav.Item>
//       <Nav.Item eventKey="news">News</Nav.Item>
//       <Nav.Item eventKey="solutions">Solutions</Nav.Item>
//       <Nav.Item eventKey="products">Products</Nav.Item>
//       <Nav.Item eventKey="about">About</Nav.Item>
//     </Nav>
//   );
// };
  

const NavbarRS = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/Sellers");
  };

  return (
        <Navbar>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Brand href="#">KERNELKART</Navbar.Brand>
        <Nav>
        <Nav.Item ></Nav.Item>
        <Nav.Item >Home</Nav.Item>
        <Nav.Item onClick={handleSubmit}>Sellers</Nav.Item>
        <Nav.Item>Customers</Nav.Item>
        <Nav.Item>Policy</Nav.Item>
        </Nav>
        <Nav pullRight>
        <Nav.Item></Nav.Item>
        <Nav.Item></Nav.Item>
        </Nav>
    </Navbar>

  )
}

export default NavbarRS