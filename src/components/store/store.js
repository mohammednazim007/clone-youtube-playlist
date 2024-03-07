import { createStore } from "easy-peasy";
import playlistModel from "./model/playListModel/playListModel";
import videoListModel from "./model/videoListModel/videoListModel";

const store = createStore({
  playlist: playlistModel,
  videoList: videoListModel,
});

export default store;
