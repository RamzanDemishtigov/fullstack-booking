import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HotelList from "./pages/HotelList/HotelList";
import Hotel from "./pages/Hotel/Hotel";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotelList" element={<HotelList />} />
          <Route path="/hotelList/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
