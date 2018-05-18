/**
 * Reconhecimento Facial
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://reconhecimento-facial.rodrigo3d.com
 * @see https://github.com/rodrigo3d/reconhecimento-facial
 */

import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/">Start Bootstrap</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> MENU &nbsp; <i className="fa fa-bars"></i></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/image">imagem</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/video">Video</Link>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link js-scroll-trigger" to="/#header" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Header</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link js-scroll-trigger" to="/#download" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Download</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link js-scroll-trigger" to="/#features" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Features</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link js-scroll-trigger" to="/#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Contact</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
