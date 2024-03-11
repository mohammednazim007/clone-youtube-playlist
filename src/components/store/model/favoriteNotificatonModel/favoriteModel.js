import { action } from "easy-peasy";
import { toast } from "react-toastify";

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
  }),
};

export default favoriteModel;
