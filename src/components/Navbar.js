import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" style={{color: props.mode==='dark'?'white':'black'}} to="/">{props.title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" style={{color: props.mode==='dark'?'white':'black'}} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color: props.mode==='dark'?'white':'black'}} to="/about">About</Link>
            </li>
          </ul>
          
        </div>

        <div className="ml-auto">
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label text-light"
                htmlFor="flexSwitchCheckDefault"></label>
            </div>
          </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Set Title Here',
};