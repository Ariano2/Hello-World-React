import React from 'react';
import ReactDOM from 'react-dom/client';

const HeaderComponent = () => (
  <header className="header">
    <img
      src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
      alt="Company Logo"
      width="100px"
      height="80px"
      crossOrigin="anonymous"
    ></img>
    <form>
      <input type="text" placeholder="search here"></input>
    </form>
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
      alt="user icon"
      width="100px"
    ></img>
  </header>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);
