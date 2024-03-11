import React from "react";
import YouTube from "react-youtube";
import { videoObject } from "./VideoList_component";
import VideoFooter from "./VideoFooter";

const YoutubePlayer = ({ videoId }) => {
  return (
    <div className="">
      <YouTube videoId={videoId} className="aspect-video" />

      {/* video information with channel image */}
      <div>{videoId && <VideoFooter videoObject={videoObject} />}</div>
    </div>
  );
};

export default YoutubePlayer;
