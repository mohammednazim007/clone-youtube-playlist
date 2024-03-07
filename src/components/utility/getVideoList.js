import axios from "axios";
const api_key = import.meta.env.VITE_CHANNEL_KEY;

const GET_VIDE_REQUEST = async (playlistId) => {
  const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&key=${api_key}`;

  const response = await axios.get(url);
  return response.data.items.map((value) => {
    const {
      channelId,
      description,
      title,
      playlistId,
      channelTitle,
      thumbnails: { medium, high },
    } = value.snippet;

    // generate new object
    const videoDetail = {
      videoId: value.contentDetails.videoId,
      channelId: channelId,
      description,
      title,
      medium,
      high,
      playlistId,
      channelTitle,
    };
    return videoDetail;
  });
};

export default GET_VIDE_REQUEST;
