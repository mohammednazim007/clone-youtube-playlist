import axios from "axios";
const api_key = import.meta.env.VITE_CHANNEL_KEY;

const GET_VIDEO_REQUEST = async (playlistId) => {
  const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&key=${api_key}`;

  let response = await axios.get(url);

  return response;
};

export default GET_VIDEO_REQUEST;
