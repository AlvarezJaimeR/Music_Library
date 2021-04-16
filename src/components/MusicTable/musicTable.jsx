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
                    <td>1</td>
                    <td>Album1</td>
                    <td>Artist1</td>
                    <td>Genre1</td>
                    <td>Release Date1</td>
                    <td>Song Title1</td>
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

{/* <div> <MusicCatalog catalog={props.catalog.artist} /> </div> */}