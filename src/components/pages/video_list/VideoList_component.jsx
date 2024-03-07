import React, { useEffect, useState } from "react";
import { SidebarComponent } from "./Video_sidebar";
import { useParams } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import SpinnerComponent from "../spinner/Spinner";
import Video_card from "./Video_card";
import "./responsive.css";

const VideoList_component = () => {
  let [videoId, setVideoId] = useState("");
  const { id } = useParams();
  const { GET_VIDEOS_BY_ID } = useStoreActions((action) => action.videoList);
  const { items, isLoadingVideo } = useStoreState((state) => state.videoList);

  // === This fn will call when will be mount for one time ===
  useEffect(() => {
    GET_VIDEOS_BY_ID(id);
  }, []);

  // video id handler
  const handleVideoId = (id) => {
    setVideoId(id);
  };

  //

  return (
    <div className="responsive_css container py-5">
      {/*=== video player  ===*/}
      <div>
        <Video_card videoId={videoId} />
      </div>

      {/*=== all videos will render ===*/}
      {isLoadingVideo ? (
        <SpinnerComponent />
      ) : (
        <div className="lg:ml-5">
          {items
            ? items.map((v) => (
                <SidebarComponent
                  handleVideoId={handleVideoId}
                  key={v.videoId}
                  data={v}
                />
              ))
            : "No content"}
        </div>
      )}
    </div>
  );
};

export default VideoList_component;
