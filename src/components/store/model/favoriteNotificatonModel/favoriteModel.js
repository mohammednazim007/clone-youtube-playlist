import { action } from "easy-peasy";
import { toast } from "react-toastify";
import { LocalStorage } from "../../../utility/localStorage";
const favorite_key = import.meta.env.VITE_FAVORITE_KEY;

const favoriteModel = {
  items: [],

  SAVE_FAVORITE_NOTIFICATION: action((state, payload) => {
    const checkId = state.items.find(
      (value) => value.videoId === payload.videoId
    );

    if (checkId) {
      toast.error("Favorite list is already stored", { autoClose: 1000 });
      return;
    }
    state.items.push(payload);
    toast.success("Favorite list is added", {
      autoClose: 500,
      position: "bottom-right",
    });

    // set favorite items in localStorage
    LocalStorage.SAVE_LOCAL_DATA(favorite_key, state.items);
  }),
};

export default favoriteModel;
