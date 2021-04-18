import React from 'react';
import './searchBar.css';
import 'bootstrap/dist/css/bootstrap.css';

function SearchBar(props){
    return(
        <div>
            <form className="search-bar" action="/action_page.php">
                <input type="text" placeholder="Search..." name="search"></input>
                <button onClick>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;