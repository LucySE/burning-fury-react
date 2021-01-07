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
    this.props.history.push(`/search/${ this.state.origin}/${ this.state.destination}`)
  // console.log('search for:', this.state.origin);
  } // handle Submit


  render() {
    return (


          <form onSubmit={ this.handleSubmit }>
          <label>Origin
          <select value={this.state.origin} onChange={this.handleOriginChange}>

          <option value="melbourne">melbourne</option>

          <option value="sydney">sydney</option>

          <option value="perth">perth</option>

          <option value="singapore">singapore</option>




          </select>


        </label>
        <label>Destination
        <select value={this.state.destination} onChange={this.handleDestinationChange}>
          <option value="melbourne">melbourne</option>

          <option value="sydney">sydney</option>

          <option value="perth">perth</option>

          <option value="singapore"> singapore</option>




        </select>


      </label>
                <input type="submit" value="Submit" />





            </form>



        );

      } //render
      } //class Search
export default Search;
