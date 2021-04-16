import React, {Component} from 'react';
import './app.css';
import axios from 'axios';
import TitleBar from './TitleBar/titleBar';
import MusicTable from './MusicTable/musicTable';

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            musicData: [],
            loading: true,
        }
    }

    //Gather the data
    componentDidMount(){
        axios.get("http://www.devcodecampmusiclibrary.com/api/music/")
        .then(res => {
            const songs = res.data;
            this.setState({musicData:songs})
            this.setState({loading: false});
            console.log(this.state.musicData)
        })
        .catch(err => {
            console.log(err)
        })
    }



    render(){
        return (
            this.state.loading ? <div>loading...</div>:
            <div className="container-fluid">
            {console.log(this.state.musicData)}
                <TitleBar />
                <table className ="table">
                    <thead className="thead-dark">
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
                        {this.state.musicData.map((eachSong)=> 
                            <MusicTable key={eachSong.id} song={eachSong}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;