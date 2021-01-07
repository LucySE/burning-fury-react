import React from 'react';

class Search extends React.Component {

  state = {
  origin: 'Sydney',
  destination: 'Melbourne'
  }; //state

  handleOriginChange = (ev) => {
    this.setState({ origin: ev.target.value });
  } //handlechange
  handleDestinationChange = (ev) => {
    this.setState({ destination: ev.target.value });
  } //handlechange
  handleSubmit = (ev) => {
    ev.preventDefault();
  console.log('search for:', this.state.origin);
  } // handle Submit


  render() {
    return (


          <form onSubmit={ this.handleSubmit }>
          <label>Origin
          <select value={this.state.origin} onChange={this.handleOriginChange}>
            <option value="Melbourne">Melbourne</option>

          <option value="Sydney">Sydney</option>




          </select>


        </label>
        <label>Destination
        <select value={this.state.destination} onChange={this.destinationChange}>
          <option value="Melbourne">Melbourne</option>

        <option value="Sydney">Sydney></option>




        </select>


      </label>
                <input type="submit" value="Submit" />





            </form>



        );

      } //render
      } //class Search
export default Search;
