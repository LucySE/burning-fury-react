import React from 'react';

// Returns information about a Flight for rendering
const FlightInformation = (props) => {
    return(
        <div>
            {/* This is placeholder until we have the data to display. Refer commented out code below */}
            <p>Date Flight# Origin &lt; Destination</p>
            
            {/* <p>{props.date} {props.flightNumber} {props.origin} {props.destination} </p> */}
        </div>
    ); // return
} // FlightInformation

export default FlightInformation;