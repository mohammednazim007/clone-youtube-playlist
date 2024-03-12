import { useStoreActions, useStoreState } from "easy-peasy";
import Search_input_component from "./Search_input";
import Play_list_cart_component from "./Play_list_cart_component";
import style from "./playlist.module.css";
import SpinnerComponent from "../spinner/Spinner";
import youtube_playlist_parser from "../../utility/youtube_playlist_parser";
import { LocalStorage } from "../../utility/localStorage";
import { useEffect, useState } from "react";
import { useSignal } from "@preact/signals-react";
const key = import.meta.env.VITE_PLAYLIST_KEY;

// === component will render ===
const Play_list_component = () => {
  const [dataStore, setDataStore] = useState([]);
  const { GET_PLAYLIST_BY_ID } = useStoreActions((act) => act.playlist);
  const { items, isLoading } = useStoreState((state) => state.playlist);
  const localData = LocalStorage.GET_LOCAL_STORAGE_DATA(key);

  // === calculate for local storage data ===
  useEffect(() => {
    if (localData) {
      const modify = Object.values(localData);
      setDataStore(modify);
    }
  }, [items]);

  // === input handlebar with input value ===
  const inputHandlebar = async (data) => {
    const playlistId = youtube_playlist_parser(data?.urlField);

    // === check youtube url id is valid or not ===
    if (playlistId && playlistId.length === 34) {
      GET_PLAYLIST_BY_ID(playlistId);
    }
  };

  //  === convert object to array elements for values ===
  // let modifyData = Object.values(items);

  return (
    <div className="container lg:py-8">
      <Search_input_component inputHandlebar={inputHandlebar} />

      {/*  === cart component will render with playlist data ===  */}
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className={` ${style.responsive_css_layout}`}>
          {dataStore &&
            dataStore?.map((value) => (
              <Play_list_cart_component key={value.playlistId} data={value} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Play_list_component;
