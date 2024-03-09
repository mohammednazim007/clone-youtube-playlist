import { toast } from "react-toastify";

const youtube_playlist_parser = (url) => {
  try {
    // Extract the query string from the URL
    let queryString = url.split("?")[1];

    // Split the query string into key-value pairs
    let queryParams = queryString.split("&");

    // Find the parameter that starts with 'list='
    let playlistParam = queryParams.find((param) => param.startsWith("list="));

    if (playlistParam) {
      // Split the parameter at '=' and return the second part (the playlist ID)
      return playlistParam.split("=")[1];
    }
  } catch (error) {
    toast.error("Not a valid url", { autoClose:1000 });
  }
};

export default youtube_playlist_parser;
