import { action, thunk } from "easy-peasy";
import GET_PLAY_LIST from "../../../utility/getPlaylist";
import { LocalStorage } from "../../../utility/localStorage";
import { toast } from "react-toastify";

const key = import.meta.env.VITE_PLAYLIST_KEY;

const playlistModel = {
  items: {},
  isError: "",
  isLoading: false,

  // setErrorFn
  setErrorFn: action((state, payload) => {
    state.isError = payload;
  }),
  // setLoadingFn
  setLoadingFn: action((state, payload) => {
    state.isLoading = payload;
  }),

  // save play list first item for banner card
  SAVE_PLAY_LIST: action((state, payload) => {
    state.items[payload.playlistId] = payload;
  }),

  // get first playlist item for generate card
  GET_PLAYLIST_BY_ID: thunk(async (actions, playlistId, helper) => {
    const existId = helper.getState().items[playlistId];

    if (existId) {
      toast.error("Playlist id already exist", { autoClose: 1000 });
      return;
    }

    try {
      // api request will done
      actions.setLoadingFn(true);
      const response = await GET_PLAY_LIST(playlistId);
      actions.SAVE_PLAY_LIST(response);

      // set loading false as well as store data TODO: LOCAL STORAGE INCLUDE
      actions.setLoadingFn(false);
      LocalStorage.SAVE_LOCAL_DATA(key, helper.getState().items);

      // send toast notification
      if (response.videoId) {
        toast.success("successfully added", {
          position: "bottom-right",
          autoClose: 1000,
        });
      }
      //handle error message
    } catch (error) {
      actions.setErrorFn(error?.message);
      actions.setLoadingFn(false);
    }
  }),
};

export default playlistModel;
