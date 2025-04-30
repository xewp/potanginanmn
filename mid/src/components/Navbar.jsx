import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/nubdexchange_logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/login');
  const handleSignup = () => navigate('/signup');

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', height: '30px', flex: 'right' }}>
        <img src={logo} alt="Logo" className="logo" style={{ height: '100%' }} />
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/section/uniforms">Uniforms</Link>
        </li>
        <li>
          <Link to="/section/school-merch">School Merch</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <div>
        <button onClick={handleLogin} style={{marginRight: '10px'}}>
          Login
        </button>
        <button onClick={handleSignup}>
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;