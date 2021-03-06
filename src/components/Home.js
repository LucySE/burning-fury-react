import React from 'react';
import axios from 'axios';

import Flight from './Flight';
import Search from './Search';
import SearchResults from './SearchResults';
import SeatingDiagram from './SeatingDiagram';
import SeatOptions from './SeatOptions'

import { Route, Link, HashRouter as Router  } from 'react-router-dom';

const BASE_URL = 'http://localhost:3000/';

class Home extends React.Component {

  // placeholder for username until connected to the server
  userName = 'Luke';

  render(){

    return (
      <div className="Home">
        <h1>Welcome to Burning Fury Airlines</h1>
        <h2>Don't let the name put you off...</h2>
        <p>{this.userName}</p>

        <Router>
        {/* Do we need a nav for the react pages? Or only for the rails pages? */}
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/search">Search</Link>
            <br />
              <Route path="/" component={ Search } /> { /* appears on every route */ }
          </nav>
          <hr />

          <Route exact path="/home" component={ Home } />
          <Route exact path="/search/:origin/:destination" component={ SearchResults } />
          <Route exact path="/flight/:flightNumber" component={ Flight } />

        </Router>

        <footer>
          <hr />
          &copy; 2021 Burning Fury Airlines
        </footer>

      </div>
    ); // return

  } // render()
} // class Home

export default Home;
