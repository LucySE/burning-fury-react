import React from 'react';

const SeatOptions = (props) => {

    const rows = props.rows;
    const columns = props.columns;

    const createColumnLabels = () => {
        let labels = [];

        // Put an empty string for the first cell. Prevents the row labels from having a column label.
        labels.push(<th> </th>)

        // Create a label for each column by looping through the total number of columns and converting the numbers to their alphabetical equivalent. Push each onto a label array
        for (let i = 0; i < columns; i++){
            labels.push(<th>{String.fromCharCode(i + 1 + 64)}</th>);
        }
        return labels;
    }

    const createSeats = () => {
        // Create an array to store the seats
        let seats = []

        // Create a seat for each
        for (let i = 0; i < rows; i++){
            let children = []

            // Add row label
            children.push(<th>{i + 1}</th>)

            for (let j = 0; j < columns; j++){
                if (i === 2 && j === 2){
                    children.push(<td>{`X`}</td>)
                } else {

                    children.push(<td>{`C${j + 1}`}</td>)
                }
            }
            seats.push(<tr>{children}</tr>)
        }
        return seats;
    }

    return(

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