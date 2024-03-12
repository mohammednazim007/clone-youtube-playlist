import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { videoObject } from "./VideoList_component";
import VideoFooter from "./VideoFooter";
import { signal } from "@preact/signals-react";

const YoutubePlayer = ({ videoId }) => {
  const [playerSize, setResize] = useState(0);
  const [playerHeight, setPlayerHeight] = useState(0);
  const widthRef = useRef();

  // === calculation for responsive all device Youtube player ===
  const resizeFn = () => {
    const container = widthRef.current.offsetWidth;
    const height = Math.floor(container / 2) + 95;
    setResize(container);
    setPlayerHeight(height);
  };

  useEffect(() => {
    resizeFn();
    window.addEventListener("resize", resizeFn);
  }, [playerSize]);

  // === Youtube player controller ===
  const opts = {
    width: playerSize,
    height: playerHeight,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="" ref={widthRef}>
      <YouTube videoId={videoId} opts={opts} className="aspect-video" />

      {/* video information with channel image */}
      <div>{videoId && <VideoFooter videoObject={videoObject} />}</div>
    </div>
  );
};

export default YoutubePlayer;
