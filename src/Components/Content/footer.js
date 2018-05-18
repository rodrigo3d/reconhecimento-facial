/**
 * Reconhecimento Facial
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://reconhecimento-facial.rodrigo3d.com
 * @see https://github.com/rodrigo3d/reconhecimento-facial
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <p>&copy; Your Website 2018. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to={`#`}>Privacy</Link>
          </li>
          <li className="list-inline-item">
            <Link to={`#`}>Terms</Link>
          </li>
          <li className="list-inline-item">
            <Link to={`#`}>FAQ</Link>
          </li>
        </ul>
        <HashLink to="/#page-top" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>TOP</HashLink>
      </div>
    </footer>
  );
};

export default Footer;
