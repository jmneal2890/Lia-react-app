import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h3>About Me</h3>
            <img src={this.props.biopic} className="img-fluid" alt="Header" />
            <p>{this.props.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About
