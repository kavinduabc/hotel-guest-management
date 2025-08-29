import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import GuestList from "./MainComponents/GuestList";
import AddGuestForm from "./MainComponents/AddGusetForm";
import UpdateGuestForm from "./MainComponents/GuestUpdate";
import Navigation from "./MainComponents/Navigation";

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
