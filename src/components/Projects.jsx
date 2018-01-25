import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import LiaAlbum from '../images/album_lr.jpg';
import BftsAlbum from '../images/album_bfts.jpg';
import TbmAlbum from '../images/album_tbm.jpg';

class Projects extends Component {
  render() {
    return (
      <div className="album text-muted">
        <div className="container">
          <div className="row">
            <div className="card col">
              <div className="card-block">
                <h1 className="card-text">Lia Rose</h1>
              </div>
              <img src={LiaAlbum} className="img-fluid card-img-bottom" alt="100%x280" />
            </div>
            <div className="card col">
              <div className="card-block">
                <h1 className="card-text">Built For The Sea</h1>
              </div>
              <img src={BftsAlbum} className="img-fluid card-img-bottom" alt="100%x280" />
            </div>
            <div className="card col">
              <div className="card-block">
                <h1 className="card-text">The Brushfoot Migration</h1>
              </div>
              <img src={TbmAlbum} className="img-fluid card-img-bottom" alt="100%x280" />
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Projects
