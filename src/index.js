//libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//locals - components 
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
//consts
const API_KEY = 'AIzaSyDX-mSNrXIl5LL5F4amElBIme8sEcOUZ2o'; 


// Create a new component. This Component should produce some HTML. 
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] }; 
        YTSearch({key: API_KEY, term: 'cats'}, (videos) => {
            this.setState({ videos });  //only works if key and prop have same name
        });
    }

    render(){
        return (
        <div> 
            <SearchBar/> 
            <VideoList videos={this.state.videos} />
        </div>
        ); 
    }
}

//take this component generated html and put it on to the page..

ReactDOM.render(<App/> , document.querySelector('.container')); 