import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import About from "./About";
import WeatherApp from "./WeatherApp.jsx";

function App() {

  

  return (
    <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
 
    </>
  );
}

export default App
