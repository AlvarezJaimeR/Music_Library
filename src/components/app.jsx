import React, {Component} from 'react';
import './app.css';
import axios from 'axios';
import TitleBar from './TitleBar/titleBar';

class App extends Component {
    constructor(props){
        super(props);
    }

    //AXIOS to consume web API
    componentDidMount(){
        async function apiCall(){
            try{
                let result = await axios.get("http://www.devcodecampmusiclibrary.com/api/music/");
                console.log(result.data);
            }
            catch(err){
                console.log(err);
            }
        }
        apiCall();
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
            </div>
        );
    }
}

export default App;