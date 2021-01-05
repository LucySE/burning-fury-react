import React from 'react';

class SearchResults extends React.Component {

    render(){
        return(
            <div>
                <h1>Placeholder for flight search results</h1>
                {/* 
                    - Display list of flights based on search query
                    - Each flight links to a flight page
                        - ul that maps the flights to an li with a key=flight.id
                        - each li contains a 'Link to' with the flight route = /flight/:flightID
                 */}
            </div>
        ); // return
    } // render
} // class SearchResults

export default SearchResults;