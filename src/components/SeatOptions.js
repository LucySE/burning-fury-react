import React from 'react';

class SeatOptions extends React.Component {

    state = {
        seatValue: '-',
        selection: 'r'
        // isTaken: false
    };

    // componentDidUpdate(){

    // }

    // Number of rows and columns on plane
    rows = this.props.rows;
    columns = this.props.columns;

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
                // Displays a H if the user has selected the seat and prevents them from selecting their selected seat
                if (String.fromCharCode(i + 1 + 64) + j === this.state.selection){
                    seat.push(<td>H</td>)
                } else {
                    // Add button to seat array as table data
                    seat.push(
                    <td>
                    {/* If the user selects a seat, show an alert indicating seat location */}
                        <button
                            onClick={() => {
                                this.setState({selection: String.fromCharCode(i + 1 + 64) + j})
                                alert('You selected: ' + String.fromCharCode(j + 1 + 64) + (i+1));
                                }}
                        >
                            {this.state.seatValue}
                        </button>
                    </td>)
                }
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

// Selected option will need to be sent to the flight page (parent) via a function for rendering

export default SeatOptions;
