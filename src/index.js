//libs
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//locals - components 
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//consts
const API_KEY = 'Hidden'; 


// Create a new component. This Component should produce some HTML. 
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null 
        }; 
        this.videoSearch('cats');
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); 
        return (
        <div> 
            <SearchBar onSearchTermChange={videoSearch}/> 
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
             onVideoSelect={selectedVideo => this.setState({selectedVideo})}
             videos={this.state.videos} />
        </div>
        ); 
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });  //only works if key and prop have same name
        });
    }
}

//take this component generated html and put it on to the page..

ReactDOM.render(<App/> , document.querySelector('.container')); 