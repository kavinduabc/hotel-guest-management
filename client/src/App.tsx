import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import GuestList from "./mainComponents/GuestList";
import AddGuestForm from "./mainComponents/AddGusetForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add-guest" element={<AddGuestForm/>}/>
        <Route path="/guest-list" element={<GuestList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
