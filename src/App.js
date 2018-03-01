/** Styling **/
import './App.css';

/** Create and manage components **/
import React, { Component } from 'react';
/** YouTube Search API **/
import YTSearch from 'youtube-api-search';
/** Use debounce to throttle search firing on input **/
import _ from 'lodash';

/** Component Imports **/
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

/** API Key **/
const keys = require('./config/keys');

/**
*   Write a Component to produce some HTML
*/
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        videos: [],
        selectedVideo: null
      };

      // Load default videos
      this.videoSearch('');
  }

  /**
  *   @param {String} term Search youtube for videos matching 'term'.
  **/
  videoSearch(term) {
    YTSearch(
      {
        key: keys.youtubeApiKey,
        term: term
      },
      (videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0]
        });
      }
    );
  }

  render() {
    // Restrict function calls to once every 400ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);

    // Return JSX to render on the page
    return (
      <div>
        {/* Search Bar */}
        <div className='row'>
          <SearchBar
            onSearchTermChange={ (term) => videoSearch(term) }
          />
        </div>

        {/* Video display panel and results list */}
        <div className='row'>
          <div className='col-md-8'>
            {/* Default: display first video in results */}
            <VideoDetail video={ this.state.selectedVideo }/>
          </div>

          {/* Video List Panel */}
          <div className='col-md-4'>

            {/* Pass the videos prop to VideoList */}
            <VideoList
              videos={ this.state.videos }

              /* If a video in the list is clicked, pas callback so VideoListElement can set props.selectedVideo to the selected video */
              onVideoSelect={ (selectedVideo) => { this.setState({ selectedVideo }) } }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
