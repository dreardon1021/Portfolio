import React from 'react';

import Header from '../Header/header.js';
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
          path="/Portfolio" exact
          component={
            Homepage
          }
        />
        <Route
          path="/Portfolio/resume" exact
          component={
            Resume
          }
        />
        <Route
          path="/Portfolio/projects" exact
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
