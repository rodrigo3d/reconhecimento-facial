/**
 * Reconhecimento Facial
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://reconhecimento-facial.rodrigo3d.com
 * @see https://github.com/rodrigo3d/reconhecimento-facial
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Contact = (props) => {
  return (
    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>We <i className="fa fa-heart"></i> new friends!</h2>
        <ul className="list-inline list-social">
          <li className="list-inline-item social-twitter">
            <Link to={`#`}>
              <i className="fa fa-twitter"></i>
            </Link>
          </li>
          <li className="list-inline-item social-facebook">
            <Link to={`#`}>
              <i className="fa fa-facebook"></i>
            </Link>
          </li>
          <li className="list-inline-item social-google-plus">
            <Link to={`#`}>
              <i className="fa fa-google-plus"></i>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
