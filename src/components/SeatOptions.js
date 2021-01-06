import React from 'react';

const SeatOptions = (props) => {

    const rows = props.rows;
    const columns = props.columns;

    const createSeats = () => {
        let seats = []

        for (let i = 0; i < rows; i++){
            let children = []
            for (let j = 0; j < columns; j++){
                children.push(<td>{`C${j + 1}`}</td>)
            }
            seats.push(<tr>{children}</tr>)
        }
        return seats;
    }

    return(

        <table>
            {createSeats()}
        </table>

    ); // return
} // SeatOptions

export default SeatOptions;