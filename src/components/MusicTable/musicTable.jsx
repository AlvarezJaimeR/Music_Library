import React from 'react';

/* class MusicTable extends Component {
    render(){
        return(
            this.props.map((musicTable)=> 
                <MusicTable key={MusicTable.id} musicTable={musicTable}/>)
            <div>
                    <td>{this.props.id}</td>
                    <td>{this.props.album}</td>
                    <td>{this.props.artist}</td>
                    <td>{this.props.genre}</td>
                    <td>{this.props.releaseDate}</td>
                    <td>{this.props.title}</td>
            </div>
        )
    }
} */

export default MusicTable;


function MusicTable(props){
    return (
        <div className = "table">
            <table className="table">
            <tbody>
                <tr>
                    <td>{props.song.id}</td>
                    <td>{props.song.album}</td>
                    <td>{props.song.artist}</td>
                    <td>{props.song.genre}</td>
                    <td>{props.song.releaseDate}</td>
                    <td>{props.song.title}</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}