import React from 'react';

function MusicTable(props){
    return (
        <div className = "table">
            <table className="table">
            <thead className="thed-dark">
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
                    <td>{props.id}</td>
                    <td>{props.album}</td>
                    <td>{props.artist}</td>
                    <td>{props.genre}</td>
                    <td>{props.releaseDate}</td>
                    <td>{props.title}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Album2</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default MusicTable;