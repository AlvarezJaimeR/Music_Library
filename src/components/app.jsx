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
            idNum:0
        }
    }

    //Gather the data
    componentDidMount(){
        axios.get("http://www.devcodecampmusiclibrary.com/api/music/")
        .then(res => {
            const songs = res.data;
            this.setState({musicData:songs})
            console.log(this.state.loading)
            this.setState({loading: false});
            console.log(this.state.loading)
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
                <MusicTable artist={this.state.musicData[this.state.idNum].artist} album={this.state.musicData[this.state.idNum].album} 
                genre={this.state.musicData[this.state.idNum].genre} title={this.state.musicData[this.state.idNum].title} 
                releaseDate={this.state.musicData[this.state.idNum].releaseDate} id={this.state.musicData[this.state.idNum].id}/>
            </div>
        );
    }
}

export default App;