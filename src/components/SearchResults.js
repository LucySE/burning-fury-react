import axios from 'axios';
import React from 'react';
import FlightInformation from './FlightInformation.js'
import Search from './Search.js'

const BASE_URL = 'http://localhost:3000/';

class SearchResults extends React.Component {

    render(){
        return(
            <div>
                <h2>Search results for "{ this.props.match.params.query }":</h2>
                {/*
                    - Display list of flights based on search query
                    - Each flight links to a flight page
                        - ul
                            - map the flights to an li with a key=flight.id
                            - each li contains a 'Link to' with the flight route = /flight/:flightID
                 */}
            </div>
        ); // return
    } // render
} // class SearchResults

export default SearchResults;
