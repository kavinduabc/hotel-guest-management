import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import GuestList from "./mainComponents/GuestList";
import AddGuestForm from "./mainComponents/AddGusetForm";
import UpdateGuestForm from "./mainComponents/GuestUpdate";
import Navigation from "./mainComponents/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/add-guest" element={<AddGuestForm/>}/>
        <Route path="/" element={<GuestList/>} />
         <Route path="/update-guest/:id" element={<UpdateGuestForm/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
