import React from 'react';
import './musicTable.css';

function MusicTable(props){
    return (
        <tr>
            <td>{props.song.id}</td>
            <td>{props.song.title}</td>
            <td>{props.song.album}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.genre}</td>
            <td>{props.song.releaseDate}</td>
        </tr>
    )
}

export default MusicTable;