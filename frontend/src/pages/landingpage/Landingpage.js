import React from 'react'
import logo from '../../assets/logo.svg'
import './landing.css'
import { useNavigate} from 'react-router-dom';

const Landingpage = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => { 
        navigate("/login");
    };
  return (
    <div>
        <div className="intro-logo jumbo-bg">
        <h1>Welcome to KERNEL KART</h1>
        <img src={logo} alt="logo" />
        <div className="intro-button">
          <a onClick={handleSubmit}>Get Started</a>
        </div>
      </div>
    </div>
  )
}

export default Landingpage