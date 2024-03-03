const key = import.meta.env.VITE_PLAYLIST_KEY;

class Storage {
  SAVE_LOCAL_DATA = (data_key, data) => {
    return localStorage.setItem(data_key, JSON.stringify(data));
  };

  GET_LOCAL_STORAGE_DATA = (data_key) => {
    return JSON.parse(localStorage.getItem(data_key));
  };
}

export const LocalStorage = new Storage();
