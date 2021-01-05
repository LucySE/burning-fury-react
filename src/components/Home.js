import React from 'react';
import axios from 'axios';

// import Search from './Search';
import Flights from './Flight';
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
            <Link to="/Search">Search</Link> |
            <Link to="/flights=">Flights</Link>
            <br />
            {/* <Route path="/" component={ Search } /> { /* appears on every route */ } 
          </nav>
          <hr />

          {
            // Like Rails routes.rb:
            // get '/' => 'pages#home'
          }
          <Route exact path="/Home" component={ Home } />
          <Route exact path="/Flights" component={ Flights } />
          {/* <Route exact path="/Search/:query" component={ Search } /> */}

        </Router>

        <footer>
          <hr />
          &copy; 2021 Burning Fury Airlines
        </footer>

      </div>
    );

  } // render()

} // class App

export default Home;
