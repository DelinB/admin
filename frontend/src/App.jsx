import "./App.css";
import { RouterProvider } from "react-router-dom";
import { CommonStateProvider } from "../src/context/CommonContext";
import routePaths from "./routes/routePaths";

function App() {
  return (
    <CommonStateProvider>
      <RouterProvider router={routePaths} />
    </CommonStateProvider>
  );
}

export default App;
