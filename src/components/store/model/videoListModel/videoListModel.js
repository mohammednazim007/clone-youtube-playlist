import { action, thunk } from "easy-peasy";

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
};

export default videoListModel;
