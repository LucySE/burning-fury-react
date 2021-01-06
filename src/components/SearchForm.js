import React from 'react';
import axios from 'axios';


class SearchForm extends React.Component {


  state = {
    searchContent: ''
  };


  handleChange = (ev) => {
    console.log('handleChange():', ev.target.value);
    this.setState({ searchContent: ev.target.value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();  // stop the form submit from reloading the page

    // Send the search content to the parent component, so it
    // can submit it to the backend

    // This is actually calling the method 'saveSearch()' in the parent class Searchs
    this.props.onSearchSubmit( this.state.searchContent );

  }


  render(){

    return (
      <form onSubmit={ this.handleSubmit } >
        <textarea onChange={ this.handleChange } />
        <br />
        <button>Share</button>
      </form>
    );

  } // render

} // class SearchsForm

export default SearchForm;
