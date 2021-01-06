import React from 'react';
import FlightInformation from './FlightInformation.js'

class Flight extends React.Component {

    state = {
        // Hardcoded flight information. 
        flight: {
            number: 'BA123',
            date: '2021-01-25',
            origin: 'Melbourne',
            destination: 'Sydney'
        },
    }

    // fetchReservations() 
    // will be used in componentDidMount to fetch the initial seat availability then poll the rails server and fetch any changes to the avialability

    // componentDidMount()
    // Runs as soon as component loads
    // will fetchReservations()

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
            

                {/* // Seat selection
                // Submit button */}

            </div>

        ); // return
    } // render
} // class Flight

export default Flight;