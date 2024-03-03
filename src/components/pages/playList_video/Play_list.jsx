import { useStoreActions, useStoreState } from "easy-peasy";
import Search_input_component from "./Search_input";
import Play_list_cart_component from "./Play_list_cart_component";
import "./playlist.css";
import SpinnerComponent from "../spinner/Spinner";
import { LocalStorage } from "../../utility/localStorage";
import { toast } from "react-toastify";

const key = import.meta.env.VITE_PLAYLIST_KEY;

// component will render
const Play_list_component = () => {
  const { GET_PLAYLIST_BY_ID } = useStoreActions((act) => act.playlist);
  const { items, isLoading } = useStoreState((state) => state.playlist);
  // const { items, isLoading } = LocalStorage.GET_LOCAL_STORAGE_DATA(key);

  // input handlebar with input value
  const inputHandlebar = (data) => {
    const playlistId = data?.urlField;
    GET_PLAYLIST_BY_ID(playlistId);

    // send toast notification
    toast.success("successfully added", {
      position: "bottom-right",
      autoClose: 1000,
    });
  };

  // convert object to array elements for values
  const modifyData = Object.values(items);

  return (
    <div className="container">
      <Search_input_component inputHandlebar={inputHandlebar} />

      {/* cart component will render with playlist data */}
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="responsive_css ">
          {modifyData?.map((value) => (
            <Play_list_cart_component key={value.playlistId} data={value} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Play_list_component;
