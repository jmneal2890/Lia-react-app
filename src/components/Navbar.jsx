import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container">
            <Link className="navbar-brand" to="/">Lia Rose</Link>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Link</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                  <div className="dropdown-menu" aria-labelledby="dropdown01">
                    <Link className="dropdown-item" to="/">Action</Link>
                    <Link className="dropdown-item" to="/">Another action</Link>
                    <Link className="dropdown-item" to="/">Something else here</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Navbar
