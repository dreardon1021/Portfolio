import React from 'react';

import Header from '../Header/header';
import Footer from '../Footer/Footer';
import Homepage from '../Homepage/Homepage';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

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
        <Route
          path="/projects/:project_id"
          component={({ match }) => {
            const { params } = match;
            return (<ProjectDetail
              id={parseInt(params.project_id)}
            />)
          }}
        />
      </Switch>
      <Footer />
    </body>
  );
}

export default App;
