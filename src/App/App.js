import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'
import { Route, Switch } from 'react-router-dom';
import Homepage from '../Homepage/Homepage.js'
import './App.css';

const App = () => {
  return (
    <body>
      <Header />
      <Switch>
        <Route
          path="/" exact
          component={() =>
            <Homepage />
          }
        />
      </Switch>
      <Footer />
    </body>
  );
}

export default App;
