import React from 'react';
import '../index.css';

import axios from 'axios';

import Flight from './Flight';
import SearchForm from './SearchForm';

const RAILS_SECRETS_BASE_URL = 'http://localhost:3000/';

class Search extends React.Component {

    state = {
      search: []
    };


    fetchSearch = () => {

      axios.get( RAILS_SECRETS_BASE_URL )
      .then( (res) => {
        console.log('response:', );
        this.setState({ search: res.data.reverse() }); // save into state
      })
      .catch( console.warn );

    } // fetchSearch


    // Run this function as soon as the component is on the page
    componentDidMount(){

      console.log('mounted!');

      this.fetchSearch();

      // Poll the server: keep refreshing the list of searchs every few
      // seconds, so the user will automatically see any new searchs added
      // by any users of the app
      window.setInterval( this.fetchSearch, 2000 );

    } // componentDidMount


    saveSearch = (content) => {
      console.log('<Search> saveSearch()', {content});
      // POST the search data to the Rails backend:
      axios.post( RAILS_SECRETS_BASE_URL, { content: content } )
      .then( (res) => {
        console.log('response from POST:', res.data);

        // Add the successfully-created search to our list of searchs
        // in state, so it appears in the rendered list on the page.
        // To do this, we copy the existing array of searchs first by
        // using the spread operator '...', and add our new search at
        // the start (newest first).
        this.setState({
          search: [ res.data, ...this.state.search ]
        });

      }) // .then
      .catch( console.warn );

    } // saveSearch


    render(){

      return (
        <div className="Home">

                  <form onSubmit={ this.handleSubmit }>
                  <label> Origin:
                  <option value={ this.origin }/>
                  </label><br/>

                <label> Destination:
                  <input type="search" placeholder="To" onInput={ this.handleChangeDestination }/>
                  </label><br />

                <input type="submit" value="Search" />

                </form>
          <h1>Spill Yer Guts</h1>

          <SearchForm onSearchSubmit={ this.saveSearch } />

          <hr />

          <h3>Terrible Search of the General Public</h3>
          <ul>
          {
            this.state.search.map( search => <li key={ search.id }>{ search.content }</li> )
          }
          </ul>

        </div>
      );

    } // render

  } // class Search

      //
      //
      //   state storing the origin and destination entered in the search form
      // state = {
      //   origin: []
      //   destination: []
      // };
      // // handleChangeOrigin
      // // Sets state of origin query
      // this.handleChangeOrigin = this.handleChangeOrigin.bind(this)
      // // handleChangeDestination
      // // Sets state of destination query
      // this.handleChangeDestination = this.handleChangeDestination.bind(this);
      //
      //   // handleSubmit method
      // this.handleSubmit = this.handleSubmit.bind(this);
      //
      //   // prevents page from reloading on form submission
      // this.handleClearForm = this.handleClearForm.bind(this);
      //   // send search query (origin and destination) to parent component (Home)
      // handleSubmit(ev) => {
      //   ev.preventDefault();
      //   this.props.onSubmit(this.state.origin, this.state.destination);
      //   this.props.passResetFlightId();
      // }
      //   // **Form Submission Logic**
      //
      //
      // render(){
      //     return(
      //
      //
      //
      //
      //         Search form
      //             input for origin
      //             input for destination
      //             Search button

          // ); // return
    //   // } // render
    // } // class Search

export default Search;
