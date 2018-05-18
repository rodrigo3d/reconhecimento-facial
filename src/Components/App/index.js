import React, { Component } from 'react';
// import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from '../Others/nav';

import ImagePage from '../Content/image';
import VideoPage from '../Content/video';

import Header from '../Content/header';
import Features from '../Others/features';
import Contact from '../Others/contact';
import Footer from '../Content/footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Nav />
        <ImagePage />
        {/*

     <Route exact path="/image" component={() => <ImagePage />} />
          <Route exact path="/video" component={() => <VideoPage />} />

        */}

          <Features />
          <Contact />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
