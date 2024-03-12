import { useParams } from "react-router-dom";
import YoutubePlayer from "./YoutubePlayer";
import style from "./responsive.module.css";
import Playlist_card from "./Playlist_card";
import useYouTubePlaylist from "../../hooks/useYouTubePlaylist";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import SpinnerComponent from "../spinner/Spinner";
import { signal } from "@preact/signals-react";
export const videoObject = signal({});

const VideoList_component = () => {
  const [videoId, setVideoId] = useState("");
  const { id } = useParams();
  const { playlistItems, nextPageToken } = useYouTubePlaylist(id);
  const { SAVE_VIDEO } = useStoreActions((act) => act.videoList);
  const { items, isLoadingVideo } = useStoreState((state) => state.videoList);

  useEffect(() => {
    SAVE_VIDEO(playlistItems);
  }, [nextPageToken]);

  const playVideoHandler = (id, value) => {
    setVideoId(id);
    videoObject.value = { ...value };
  };

  return (
    <div className={`bg_gradient py-8 lg:py-10 ${style.bg_gradient}`}>
      {isLoadingVideo ? (
        <SpinnerComponent />
      ) : (
        <div className={`container ${style.responsive_css}`}>
          {/* === youtube player component === */}
          <div className="">
            <YoutubePlayer videoId={videoId} />
          </div>

          {/* === sidebar component will render here ==== */}
          <div className="h-[95vh] overflow-scroll ">
            {items &&
              items?.map((value, index) => (
                <Playlist_card
                  playVideoHandler={playVideoHandler}
                  value={value}
                  key={value.etag + index}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoList_component;
