import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My Blog</div>
      <div className="menu">
        <a href="#profile">Profile</a>
        <a href="#posts">Posts</a>
        <a href="#contacts">Contacts</a>
      </div>
    </nav>
  );
};

export default Navbar;