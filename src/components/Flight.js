import axios from 'axios';
import React from 'react';
import FlightInformation from './FlightInformation.js'
import SeatOptions from './SeatOptions.js'

const BASE_URL = 'http://localhost:3000/';

class Flight extends React.Component {

    state = {
        rows: null,
        columns: null,
        // Hardcoded flight information. 
        flight: {
            number: 'BA123',
            date: '2021-01-25',
            origin: 'Melbourne',
            destination: 'Sydney',
            planeID: 2
        },
    }

    // Fetch the number of rows and columns on the plane and update their state
    fetchPlane = () => {
        const planeURL = BASE_URL + 'airplanes/' + this.state.flight.planeID
        axios.get(planeURL)
        .then((res) => {
            console.log('plane response:', res.data);
            this.setState({rows: res.data.rows});
            this.setState({columns: res.data.columns});
        })
        .catch(console.warn())
    }

    // fetchUsers()

    // fetchReservations() 
    // will be used in componentDidMount to fetch the initial seat availability then poll the rails server and fetch any changes to the avialability

    // Runs as soon as component loads and fetches information about the flight and it's reservations from the server
    componentDidMount(){
        console.log('mounted!');
        this.fetchPlane();
    }

    // saveReservation()
    // will save the users reservation 
    // by posting to the server & updating state of reservation table

    render() {
        return(
            <div>
                <h2>Book seat</h2>
                {/* Displays information about the flight. Flight details are passed to FlightInformation functional component and it returns the formatted flight info for rendering */}
                <FlightInformation {...this.state.flight} />

                {/* Display plane layout for seat selection */}
                <SeatOptions rows={this.state.rows} columns={this.state.columns}/>

                {/* 
                // Form for seat selection (Might be its own component?)
                    // Display seats
                        // Row labels
                        // Column labels
                        // Seats
                            // Available
                            // Unavailable
                            // Selected */}

                            {/* display rows and columns */}
                            <p>Rows: {this.state.rows}</p>
                            <p>Columns: {this.state.columns}</p>
                        
            

                {/* // Seat selection
                // Submit button */}

            </div>

        ); // return
    } // render
} // class Flight

export default Flight;