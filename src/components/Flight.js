import React from 'react';
import FlightInformation from './FlightInformation.js'

// flight details functional component
// Render flight details based on route params for flight

class Flight extends React.Component {

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
            <h1>Book seat page</h1>
            {/* // Display flight details
                    // Date
                    // Flight number
                    // Origin -> Destination 

                Flight details passed to FlightInformation which is a Functional Component. It returns the flight info for rendering.
            */}
                <FlightInformation/>
                {/* <FlightInformation flightNumber={} /> */}
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