import React from 'react';
import axios from 'axios';
class Search extends React.Component {

  state = {
  origin: 'Sydney',
  destination: 'Melbourne'
  }; //state

  handleChange = (ev) => {
    this.setState({ origin: ev.target.value });
  } //handlechange
  handleSubmit = (ev) => {
    ev.preventDefault();
  console.log('search for:', this.state.origin);
  } // handle Submit

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
        Origin:
        <select value={this.state.origin} onChange={this.handleChange}>
        </select>
      </label>
        <label>
        Destination:
        <select value={this.state.destination} onChange={this.handleChange}>
        </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      );

  } //render
} //class Search
export default Search;
