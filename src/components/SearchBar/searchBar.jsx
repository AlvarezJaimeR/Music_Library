import React from 'react';
import './searchBar.css';
import 'bootstrap/dist/css/bootstrap.css';

function SearchBar(props){
    return(
        <div>
            <form className="search-bar" >
                <input type="text" placeholder="Search..." 
                value ={props.userInput} 
                onChange={props.handleChange()}></input>
            </form>
        </div>
    )
}

export default SearchBar;