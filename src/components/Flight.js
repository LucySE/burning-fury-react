import React from 'react';

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
            <h1>Book seat page</h1>
            // Display flight details
                // Date
                // Flight number
                // Origin -> Destination
                // 

            // Form for seat selection (Might be its own component?)
                // Display seats
                    // Row labels
                    // Column labels
                    // Seats
                        // Available
                        // Unavailable
                        // Selected

                // Seat selection
                // Submit button

        ); // return
    } // render
} // class Flight

export default Flight;