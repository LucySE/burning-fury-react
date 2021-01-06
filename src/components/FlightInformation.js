import React from 'react';

// Returns information about a Flight for rendering
const FlightInformation = (props) => {
    return(
        <p>{props.date} {props.number} {props.origin} &gt; {props.destination}</p>
    ); // return
} // FlightInformation

export default FlightInformation;