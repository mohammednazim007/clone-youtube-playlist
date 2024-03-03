import { RouterProvider } from "react-router-dom";
import browserRouter from "./Router/BrowserRouter";
import { StoreProvider } from "easy-peasy";
import store from "./components/store/store";

const App = () => {
  return (
    <StoreProvider store={store}>
      <RouterProvider router={browserRouter} />
    </StoreProvider>
  );
};

export default App;
