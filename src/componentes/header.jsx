import React from 'react';

function Header(props) {
  return (
    <header className="header">
      <div className="menu container">
        <a href="#" className="logo">{props.logo}</a>
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img src={props.menuIcon} className="menu-icono" alt="menu" />
        </label>
        <nav className="navbar">
          <ul>
            <li><a href="#">{props.navLinks[0]}</a></li>
            <li><a href="#">{props.navLinks[1]}</a></li>
            <li><a href="#">{props.navLinks[2]}</a></li>
            <li><a href="#">{props.navLinks[3]}</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-content container">
        <div className="header-txt">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="buttons">
            <a href="#" className="btn-1">{props.button1Text}</a>
            <a href="#" className="btn-1">{props.button2Text}</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
