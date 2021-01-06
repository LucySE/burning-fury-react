import React from 'react';

class SeatOptions extends React.Component {

    //     {/* 
    // // Form for seat selection (Might be its own component?)
    //     // Display seats
    //         // Row labels
    //         // Column labels
    //         // Seats
    //             // Available
    //             // Unavailable
    //             // Selected */}

    state = {
        seatValue: '-',
        selection: 'x'
        // isTaken: false
    };

    rows = this.props.rows;
    columns = this.props.columns;

    // checkSeatAvailable = () => {
    //     // if (seatUnavilable) {
    //         // this.setState({isTaken: true})
    //     // else {
    //         // this.setState({isTaken: false})
    //     // }
    //     // }
    // }

    createColumnLabels = () => {
        let labels = [];

        // Set first cell as empty. Prevents the row labels from having a column label.
        labels.push(<th> </th>)

        // Create a label for each column by looping through the total number of columns and converting the numbers to their alphabetical equivalent. Push each onto a label array
        for (let i = 0; i < this.columns; i++){
            labels.push(<th>{String.fromCharCode(i + 1 + 64)}</th>);
        }
        return labels;
    } // createColumnLabels()

    createSeats = () => {
        // Create an array to store the seats
        let seats = []

        // Create a seat for each row/col
        for (let i = 0; i < this.rows; i++){
            let seat = []

            // Add row label
            seat.push(<th>{i + 1}</th>)

            // Add seats to an individual row
            for (let j = 0; j < this.columns; j++){
                // if (this.state.isTaken){
                //     seat.push(<td>{`X`}</td>)
                // } else {
                    if (String.fromCharCode(i + 1 + 64) + j === this.state.selection){
                        seat.push(<td>H</td>)
                    } else {
                        seat.push(
                        <td>
                            <button 
                                onClick={() => this.setState({selection: String.fromCharCode(i + 1 + 64) + j})}
                            >
                                {this.state.seatValue}
                            </button>
                        </td>)
                    }
                // }
            } // for (j)

            // Add the row to the array of seats
            seats.push(<tr>{seat}</tr>)
        }// for (i)

        return seats;
    } // createSeats()

    render() {
        return(
            // Table showing seats on the plane
            <table>
                <thead>
                    <tr>
                        {this.createColumnLabels()}
                    </tr>
                </thead>
                <tbody>
                    {this.createSeats()}
                </tbody>
            </table>
        ); // return
    }
} // class SeatOptions

// Selected option will need to be sent to the flight page (parent) via a function

export default SeatOptions;