import { createStore } from "easy-peasy";
import playlistModel from "./model/playListModel/playListModel";
import videoListModel from "./model/videoListModel/videoListModel";
import favoriteModel from "./model/favoriteNotificatonModel/favoriteModel";

const store = createStore({
  playlist: playlistModel,
  videoList: videoListModel,
  favoriteNotification: favoriteModel,
});

export default store;
