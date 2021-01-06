import axios from 'axios';
import React from 'react';
import FlightInformation from './FlightInformation.js'

const BASE_URL = 'http://localhost:3000/';

class Flight extends React.Component {

    state = {
        airplane: {},
        // Hardcoded flight information. 
        flight: {
            number: 'BA123',
            date: '2021-01-25',
            origin: 'Melbourne',
            destination: 'Sydney',
            planeID: 2
        },
    }

    // Fetch the number of rows and columns on the plane
    fetchPlane = () => {
        const planeURL = BASE_URL + 'airplanes/' + this.state.flight.planeID
        axios.get(planeURL)
        .then((res) => {
            console.log('plane response:', res.data);
        })
        .catch(console.warn())
    }

    // fetchUsers()

    // fetchReservations() 
    // will be used in componentDidMount to fetch the initial seat availability then poll the rails server and fetch any changes to the avialability

    // componentDidMount()
    // Runs as soon as component loads
    // will fetchReservations()
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
                {/* // Display flight details
                        // Date
                        // Flight number
                        // Origin -> Destination 

                    Flight details passed to FlightInformation which is a Functional Component. It returns the flight info for rendering.
                */}
                <FlightInformation {...this.state.flight} />

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
                            {/* <p>Rows: {this.state.airplane.rows}</p>
                            <p>Columns: {this.state.airplane.columns}</p>
             */}

                {/* // Seat selection
                // Submit button */}

            </div>

        ); // return
    } // render
} // class Flight

export default Flight;