import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  return (
    <div className="header">
      <div className="header-logo">
        <img src={LOGO_URL} alt="Brand Logo" />
      </div>
      <div className="nav-links">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            id="login-btn"
            onClick={() => {
              document.getElementById('login-btn').classList.toggle('login');
              document.getElementById('login-btn').classList.toggle('logout');
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
