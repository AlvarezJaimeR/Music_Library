import React from 'react';

function MuiscTable(props){
    return (
        <div className = "music-table">
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">ID #</th>
                <th scope="col">Album</th>
                <th scope="col">Artist</th>
                <th scope="col">Genre</th>
                <th scope="col">Release Date</th>
                <th scope="col">Song Title</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                </tr>
                <tr>
                    <th scope="row">2</th>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default MuiscTable;