import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStoreActions, useStoreState } from "easy-peasy";
const api_key = import.meta.env.VITE_CHANNEL_KEY;

// TODO: the api will be recall only for 5 items
// TODO: i have to fixed load all videos

const useYouTubePlaylist = (playlistId) => {
  const [playlistItems, setPlaylistItems] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const { SET_VIDEO_ERROR, SET_VIDEO_LOADING } = useStoreActions(
    (action) => action.videoList
  );

  let url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&key=${api_key}`;

  useEffect(() => {
    try {
      const GET_VIDEO_REQUEST = async () => {
        if (nextPageToken) {
          url += `&pageToken=${nextPageToken}`;
        }
        SET_VIDEO_LOADING(true);
        let response = await axios.get(url);
        const data = await response.data;

        if (!data.nextPageToken) {
          return;
        }

        setPlaylistItems((prevItems) => [...prevItems, ...data.items]);
        setNextPageToken(data.nextPageToken || "");
      };

      GET_VIDEO_REQUEST();
    } catch (error) {
      SET_VIDEO_ERROR(error.message);
    } finally {
      SET_VIDEO_LOADING(false);
      SET_VIDEO_ERROR("");
    }

    // === dependence ===
  }, [api_key, playlistId, nextPageToken]);

  return playlistItems;
};
export default useYouTubePlaylist;
