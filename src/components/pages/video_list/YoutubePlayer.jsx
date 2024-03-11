import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }) => {
  return (
    <div className="">
      <YouTube videoId={videoId} className="aspect-video" />
    </div>
  );
};

export default YoutubePlayer;
