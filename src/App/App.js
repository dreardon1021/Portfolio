import React from 'react';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'
import Homepage from '../Homepage/Homepage.js'
import Resume from '../Resume/Resume.js'
import Projects from '../Projects/Projects.js'

import { Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <body>
      <Header />
      <Switch>
        <Route
          path="/" exact
          component={
            Homepage
          }
        />
        <Route
          path="/resume" exact
          component={
            Resume
          }
        />
        <Route
          path="/projects" exact
          component={
            Projects
          }
        />
      </Switch>
      <Footer />
    </body>
  );
}

export default App;
