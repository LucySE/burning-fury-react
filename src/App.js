import React from 'react';
import './App.css';
import Home from './Home';
import Search from './Search.js';
import SearchResults from './SearchResults';

import { Route, Link, HashRouter as Router  } from 'react-router-dom';


class App extends React.Component {

  render(){

    return (
      <div className="App">
        <h1>Welcome to Burning Fury Airlines</h1>
        <h2>Don't let the name put you off...</h2>

        <Router>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/search">Search</Link> |
            <Link to="/flights=">Flights</Link>
            <br />
            <Route path="/" component={ Search } /> { /* appears on every route */ }
          </nav>
          <hr />

          {
            // Like Rails routes.rb:
            // get '/' => 'pages#home'
          }
          <Route exact path="/" component={ Home } />
          <Route exact path="/flights" component={ Flights } />
          <Route exact path="/search/:query" component={ Search } />

        </Router>

        <footer>
          <hr />
          &copy; 2021 Burning Fury Airlines
        </footer>

      </div>
    );

  } // render()

} // class App

export default App;
