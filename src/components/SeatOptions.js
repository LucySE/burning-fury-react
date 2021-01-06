import React from 'react';

const SeatOptions = (props) => {

    const rows = props.rows;
    const columns = props.columns;

    const createColumnLabels = () => {
        let labels = [];

        // Set first cell as empty. Prevents the row labels from having a column label.
        labels.push(<th> </th>)

        // Create a label for each column by looping through the total number of columns and converting the numbers to their alphabetical equivalent. Push each onto a label array
        for (let i = 0; i < columns; i++){
            labels.push(<th>{String.fromCharCode(i + 1 + 64)}</th>);
        }
        return labels;
    } // createColumnLabels()

    const createSeats = () => {
        // Create an array to store the seats
        let seats = []

        // Create a seat for each row/col
        for (let i = 0; i < rows; i++){
            let seat = []

            // Add row label
            seat.push(<th>{i + 1}</th>)

            // Add seats to an individual row
            for (let j = 0; j < columns; j++){
                if (i === 2 && j === 2){
                    seat.push(<td>{`X`}</td>)
                } else {
                    seat.push(<td>{`C${j + 1}`}</td>)
                }
            } // for (j)

            // Add the row to the array of seats
            seats.push(<tr>{seat}</tr>)
        }// for (i)

        return seats;
    } // createSeats()

    return(
        // Table showing seats on the plane
        <table>
            <thead>
                <tr>
                    {createColumnLabels()}
                </tr>
            </thead>
            <tbody>
                {createSeats()}
            </tbody>
        </table>

    ); // return
} // SeatOptions

export default SeatOptions;