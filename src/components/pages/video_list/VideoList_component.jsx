import React, { useEffect, useState } from "react";
import { SidebarComponent } from "./Video_sidebar";
import { useParams } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import SpinnerComponent from "../spinner/Spinner";
import Video_card from "./Video_card";
import "./responsive.css";
import useYouTubePlaylist from "../../hooks/useYouTubePlaylist";
import { useSignal } from "@preact/signals-react";

const VideoList_component = () => {
  const { id } = useParams();
  const [videoInfo, setVideoInfo] = useState({});
  const { SAVE_VIDEO } = useStoreActions((action) => action.videoList);
  const { items, isLoadingVideo } = useStoreState((state) => state.videoList);
  const youtubeList = useYouTubePlaylist(id);

  useEffect(() => {
    SAVE_VIDEO(youtubeList);
    return () => SAVE_VIDEO(youtubeList);
  }, [youtubeList]);

  const handleVideoId = (videoInfo) => {
    setVideoInfo({ ...videoInfo });
  };

  return (
    <div className="bg_gradient">
      <div className="responsive_css container py-10">
        {isLoadingVideo ? (
          <SpinnerComponent />
        ) : (
          <>
            <div className="">
              <Video_card videoInfo={videoInfo} />
            </div>

            {/*=== all videos will render ===*/}
            {isLoadingVideo ? (
              <SpinnerComponent />
            ) : (
              <div className="lg:ml-5 h-[80vh] overflow-auto overscroll-y-none">
                {items
                  ? items.map((v) => (
                      <SidebarComponent
                        handleVideoId={handleVideoId}
                        key={v.etag}
                        value={v}
                      />
                    ))
                  : "No content"}
              </div>
            )}
          </>
        )}
        {/*=== video player   ===*/}
      </div>
    </div>
  );
};

export default VideoList_component;
