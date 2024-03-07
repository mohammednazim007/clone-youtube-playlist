import axios from "axios";

// const playlistId = `PLHiZ4m8vCp9MOm1pnPG5ATcl7y6EW6kXl`;
const api_key = import.meta.env.VITE_CHANNEL_KEY;

const GET_PLAY_LIST = async (playId) => {
  // play list url with ID & key
  const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playId}&key=${api_key}`;

  // received play list data
  const { data } = await axios.get(url);
  const {
    contentDetails: { videoId },

    snippet: {
      channelId,
      description,
      playlistId,
      thumbnails: { high, medium },
      title,
      channelTitle,
    },
  } = data.items[0];

  return {
    videoId,
    channelId,
    description,
    playlistId,
    channelTitle,
    title,
    high,
    medium,
  };
};

export default GET_PLAY_LIST;
