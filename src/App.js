import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import CustomPage from "./components/CustomPage/CustomPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
