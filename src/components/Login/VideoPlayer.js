import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <video controls width="640" height="360">
        <source src="https://youtu.be/2LsOyOaobrc?si=j9oAmc0hnOCp6fXP" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
