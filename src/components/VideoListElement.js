import React from 'react';

const VideoListElement = ({ video, onVideoSelect }) => {

  return (
    /* If this element is selected, call the onVideoSelect received as prop to set selectedVideo */
    <li className='list-group-item'
        onClick={ () => onVideoSelect(video) }
      >
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object video-item'
            src={ video.snippet.thumbnails.default.url }
            alt="Video Thumbnail"/>
        </div>
        <div className='media-body'>
          <div className='media-heading'>{ video.snippet.title }</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListElement;
