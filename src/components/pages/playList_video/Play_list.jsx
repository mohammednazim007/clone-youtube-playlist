import { useStoreActions, useStoreState } from "easy-peasy";
import Search_input_component from "./Search_input";
import Play_list_cart_component from "./Play_list_cart_component";
import "./playlist.css";
import SpinnerComponent from "../spinner/Spinner";
import { toast } from "react-toastify";

const key = import.meta.env.VITE_PLAYLIST_KEY;

// component will render
const Play_list_component = () => {
  const { GET_PLAYLIST_BY_ID } = useStoreActions((act) => act.playlist);
  const { items, isLoading } = useStoreState((state) => state.playlist);

  // input handlebar with input value
  const inputHandlebar = async (data) => {
    const playlistId = data?.urlField;
    GET_PLAYLIST_BY_ID(playlistId);
  };

  // convert object to array elements for values
  let modifyData = Object.values(items);

  return (
    <div className="container">
      <Search_input_component inputHandlebar={inputHandlebar} />

      {/* cart component will render with playlist data */}
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="responsive_css_layout ">
          {modifyData?.map((value) => (
            <Play_list_cart_component key={value.playlistId} data={value} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Play_list_component;
