
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homenavbar from "./Components/Navbar";
import Homebuttons from "./Components/Content";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route></Route>
      </Routes>
      <Homenavbar />
      <Homebuttons />
    </div>
  );
}

export default App;
