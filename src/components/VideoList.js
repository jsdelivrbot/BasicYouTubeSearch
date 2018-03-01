import React from 'react';
import VideoListElement from './VideoListElement';

const VideoList = ({ videos, onVideoSelect }) => {

  // Map video results into a list of elements
  const videoElements = videos.map( (video) => {

    return (
      <VideoListElement
        key={ video.etag }
        video={ video }
        /* Pass onVideoSelect function to VideoListElement */
        onVideoSelect={ onVideoSelect }
      />
    );
  });

  // If there are videos to display, return them; else, error message
  return (videoElements.length)

    ? (<ul className='list-group'>{ videoElements }</ul>)

    : (<div className='loading-wrapper text-center'
        style={{ textAlign: 'center' }}>
        No results!<br />
        Try searching something else.
      </div>
    );
};

export default VideoList;
