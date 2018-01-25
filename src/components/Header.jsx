import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LiaHeader from '../images/header_lia_01.jpg';
import BftsHeader from '../images/header_bfts_01.jpg';
import TbmHeader from '../images/header_tbm_01.jpg';

class Header extends Component {
  render() {
    return (
      <div>
        <img src={this.props.header} className="img-fluid" alt="Header" />
        </div>
    );
  }
}

export default Header
