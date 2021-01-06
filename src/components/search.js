import React from 'react';
import axios from 'axios';
import FlightInformation from './FlightInformation';
import Flight from './Flight';



class Search extends React.Component {
      // state storing the origin and destination entered in the search form
    constructor (){
      super();

      this.state = {
      origin: '',
      destination: ''
      }
    }
    // handleChangeOrigin
    // Sets state of origin query
    this.handleChangeOrigin = this.handleChangeOrigin.bind(this)
    // handleChangeDestination
    // Sets state of destination query
    this.handleChangeDestination = this.handleChangeDestination.bind(this);
    }
      // handleSubmit method
    this.handleSubmit = this.handleSubmit.bind(this);

      // prevents page from reloading on form submission
    this.handleClearForm = this.handleClearForm.bind(this);
      // send search query (origin and destination) to parent component (Home)
    handleSubmit(){
      // **Form Submission Logic**
    }

      render(){
          return(
              <form

              // Search form
                  // input for origin
                  // input for destination
                  // Search button

          ); // return
      } // render
    } // class Search

export default Search;
