import React from 'react';

const FlightInformation = (props) => {
    return(
        <div>
            Date: XXXX-XX-XX
            Flight number: XXXX
            Origin: Xxxxxxxxx
            Destination: Xxxxxxxxx
            {/* Date: {props.date}
            Flight number: {props.flightNumber}
            Origin: {props.origin}
            Destination: {props.destination} */}
        </div>
    )
}

export default FlightInformation;