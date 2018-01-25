import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import LiaBiopic from '../images/biopic_lr.jpg';
import BftsBiopic from '../images/biopic_bfts.jpg';
import TbmBiopic from '../images/biopic_tbm.jpg';
import LiaHeader from '../images/header_lia_01.jpg';
import BftsHeader from '../images/header_bfts_01.jpg';
import TbmHeader from '../images/header_tbm_01.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header header={LiaHeader} />
        <Projects />
        <About bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit leo, fermentum ac velit et, convallis euismod metus. Praesent arcu felis, egestas vel eros sit amet, consequat laoreet risus. Morbi eget pretium elit, ac aliquet est. In hac habitasse platea dictumst. Donec a imperdiet libero. Suspendisse vehicula bibendum nisl, ullamcorper suscipit purus laoreet nec. Donec tincidunt finibus massa ac maximus. Praesent sollicitudin tincidunt justo at auctor. Fusce risus lorem, porta ac massa ac, vestibulum sagittis ante. Duis erat neque, tincidunt in consequat ac, rutrum eget orci. Proin ullamcorper faucibus sem eget congue. Mauris fermentum lorem dolor, ac sagittis quam hendrerit id." biopic={LiaBiopic} />
      </div>
    );
  }
}

export default Home
