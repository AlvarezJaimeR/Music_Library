import React, {Component} from 'react';
import './app.css';
import axios from 'axios';
import TitleBar from './TitleBar/titleBar';
import MusicTable from './MusicTable/musicTable';
import SearchBar from './SearchBar/searchBar';

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            musicData: [],
            loading: true,
            userType: '',
            output: []
        }

        this.handleChange = this.handleChange.bind(this);

    }

    //Gather the data
    componentDidMount(){
        axios.get("http://www.devcodecampmusiclibrary.com/api/music/")
        .then(res => {
            const songs = res.data;
            this.setState({musicData:songs, loading: false, output: songs})
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleChange(event){
        this.setState({userType: event.target.value});
        
        let filteredData = this.state.musicData.filter((value)=>{
            console.log("user type", this.state.userType);
            console.log(value.title);
            if(value.title.toLowerCase().includes(this.state.userType.toLowerCase()) || 
            value.artist.toLowerCase().includes(this.state.userType.toLowerCase()) ||
            value.album.toLowerCase().includes(this.state.userType.toLowerCase()) ||
            value.genre.toLowerCase().includes(this.state.userType.toLowerCase()) ||
            value.releaseDate.toLowerCase().includes(this.state.userType.toLowerCase()) ){
                return true;
            }  
            });
         this.setState({
             musicData: filteredData
         })
    }

    render(){
        console.log("music Data", this.state.musicData);
        return (
            this.state.loading ? <div>loading...</div>:
            <div className="container-fluid">
            {console.log(this.state.musicData)}
                <TitleBar />
                <SearchBar userInput={this.state.userType} 
                handleChange={() => this.handleChange} 
                handleSubmit={()=> this.handleSubmit} />
                <table className ="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">ID #</th>
                        <th scope="col">Song Title</th>
                        <th scope="col">Album</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Release Date</th>
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