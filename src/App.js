import logo from "./logo.svg";
import "./App.css";
import HomePage from "./page/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
      </Routes>
    </div>
  );
}

export default App;
