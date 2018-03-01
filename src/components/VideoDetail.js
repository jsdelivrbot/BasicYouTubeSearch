import React from 'react';

/**
*   Display a full video on 2/3 of the page
**/
const VideoDetail = ({ video }) => {

  /* Wait for valid video */
  if (!video) {
    return (
      <div
        className='loading-wrapper'>
        <div className="blue ball" />
        <div className="red ball" style={{animationDelay: '.25s'}} />
        <div className="yellow ball" style={{animationDelay: '.5s'}} />
        <div className="green ball" style={{animationDelay: '.75s'}} />
      </div>
    );
  }

  const videoSourceUrl = `https://www.youtube.com/embed/${ video.id.videoId }`;
  const datePublished = new Date(video.snippet.publishedAt).toLocaleDateString();

  const openExternalChannelUrl = () => {
    let channelUrl = `https://www.youtube.com/channel/${ video.snippet.channelId }`;
    window.open(channelUrl, '_blank');
  }

  const videoPanel = (
    // Video panel container
    <div className='details'>
      {/* Video panel header */}
      <div>
        <p>
          <a
            className='h4'
            onClick={ openExternalChannelUrl }
            title='Channel Name'>{ video.snippet.channelTitle }
          </a>
          <span className='h5' title='Date Published'> | { datePublished }</span>
        </p>
      </div>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe
          className='embed-responsive-item'
          title={ video.title }
          src={ videoSourceUrl }
        ></iframe>
      </div>
    </div>
  );

  const detailPanel = (
    <div className='details' title='Channel Name'>
      <div className='h3'>{ video.snippet.title }</div>
      <div>{ video.snippet.description }</div>
    </div>
  );

  /* Render */
  return (
    <div className='left'>
      <div className='video-detail'>
        { videoPanel }
        { detailPanel }
      </div>
    </div>
  );
};

export default VideoDetail;
