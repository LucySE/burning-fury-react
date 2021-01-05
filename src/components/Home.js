import React from 'react';
import axios from 'axios';

import Search from './Search';
import Flight from './Flight';
// import SearchResults from './SearchResults';

import { Route, Link, HashRouter as Router  } from 'react-router-dom';


class Home extends React.Component {

  render(){

    return (
      <div className="Home">
        <h1>Welcome to Burning Fury Airlines</h1>
        <h2>Don't let the name put you off...</h2>

        <Router>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/Search">Search</Link>
            <br />
              <Route path="/" component={ Search } /> { /* appears on every route */ }
          </nav>
          <hr />

          <Route exact path="/Home" component={ Home } />
          {/* <Route exact path="/Search/:query" component={ Flight } />  */}

          {/* Temporary route for testing Flight reservation component */}
          <Route exact path="/flight" component={ Flight } /> 

        </Router>

        <footer>
          <hr />
          &copy; 2021 Burning Fury Airlines
        </footer>

      </div>
    );

  } // render()
} // class Home

export default Home;
