import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className={style.linkInNav} to="/">Home</Link>
            <Link className={style.linkInNav} to="/archive">Archive</Link>
          </div>
        </div>
      </div>
    </nav>

  );
}
