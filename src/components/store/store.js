import { createStore } from "easy-peasy";
import playlistModel from "./model/playListModel/playListModel";

const store = createStore({
  playlist: playlistModel,
});

export default store;
