import { RouterProvider } from "react-router-dom";
import browserRouter from "./Router/BrowserRouter";
import { StoreProvider } from "easy-peasy";
import store from "./components/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <StoreProvider store={store}>
      <RouterProvider router={browserRouter} />
      <ToastContainer />
    </StoreProvider>
  );
};

export default App;
