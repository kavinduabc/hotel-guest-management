import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import GuestList from "./mainComponents/GuestList";
import AddGuestForm from "./mainComponents/AddGusetForm";
import UpdateGuestForm from "./mainComponents/GuestUpdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add-guest" element={<AddGuestForm/>}/>
        <Route path="/guest-list" element={<GuestList/>} />
         <Route path="/update-guest" element={<UpdateGuestForm/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
