import React from "react";
import YouTube from "react-youtube";

const Video_card = ({ videoId }) => {
  return (
    <div className="mb-4 lg:mb-0">
      <YouTube videoId={videoId} />
    </div>
  );
};

export default Video_card;
