import React from 'react';

import axios from 'axios';

import Search from './Search.js'

import { Route, Link, HashRouter as Router  } from 'react-router-dom';

const BASE_URL = 'http://localhost:3000'


class SearchResults extends React.Component {

    state ={
      flights: []
    };

    fetchFlights = () => {

      axios.get( BASE_URL + "/flights")
      .then( (res) => {
        console.log('response:', res.data);
        this.setState({ flights: res.data });
       // save// save into state
      })
      .catch( console.warn );

    } // fetchFlights

      componentDidMount(){

        console.log('mounted');

      this.fetchFlights();

      }


    render(){
        return(
            <div>
                <h2>
                    Search results for "{ this.props.match.params.origin } to { this.props.match.params.destination }":
                </h2>
                <ul>
                  <li>
                    Flight ID Origin > Destination
                  </li> {
                  this.state.flights.map( flight =>(

                  flight.origin === this.props.match.params.origin && flight.destination === this.props.match.params.destination && <li key={ flight.id }><Link to="/flight/" {{params: flight.id}} >  {flight.flightNumber}  {flight.origin} > {flight.destination} {flight.date}</Link></li>
                ))
              }
              </ul>
            </div>
        ); // return
    } // render
} // class SearchResults

export default SearchResults;
