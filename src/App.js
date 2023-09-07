import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CustomHeader from "./components/CustomHeader/CustomHeader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomHeader />
      </BrowserRouter>
    </div>
  );
}

export default App;
