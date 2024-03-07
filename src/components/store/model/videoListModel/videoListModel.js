import { action, thunk } from "easy-peasy";
import GET_VIDE_REQUEST from "../../../utility/getVideoList";

const videoListModel = {
  items: [],
  isLoadingVideo: false,
  isErrorVideo: "",

  // === set video loading ===
  SET_VIDEO_LOADING: action((state, payload) => {
    state.isLoadingVideo = payload;
  }),

  // === set video error ===
  SET_VIDEO_ERROR: action((state, payload) => {
    state.isErrorVideo = payload;
  }),

  // === save video in items ===
  SAVE_VIDEO: action((state, payload) => {
    state.items = payload;
  }),

  // === get videos by id ===
  GET_VIDEOS_BY_ID: thunk(async (action, payload, helper) => {
    // === if data fetching
    action.SET_VIDEO_LOADING(true);

    try {
      // === response will send here
      const response = await GET_VIDE_REQUEST(payload);
      action.SAVE_VIDEO(response);
      action.SET_VIDEO_LOADING(false);

      // handle error message
    } catch (error) {
      action.SET_VIDEO_ERROR(error.message);
    } finally {
      action.SET_VIDEO_ERROR("");
      action.SET_VIDEO_LOADING(false);
    }
  }),
};

export default videoListModel;
