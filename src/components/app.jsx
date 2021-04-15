import React, {Component} from 'react';
import './app.css';
import axios from 'axios';
import TitleBar from './TitleBar/titleBar';
import MusicTable from './MusicTable/musicTable';

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            musicData: []
        }
    }

    //Gather the data
    componentDidMount(){
        axios.get("http://www.devcodecampmusiclibrary.com/api/music/")
        .then(res => {
            const songs = res.data;
            console.log(this.state.musicData)
            this.setState({musicData:songs})
            console.log(this.state.musicData)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <MusicTable />
            </div>
        );
    }
}

export default App;