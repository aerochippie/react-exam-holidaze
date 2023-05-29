import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/home/Home"
import {Login} from "./pages/login/Login"
import {Register} from "./pages/register/Register"
import "./App.css"
import { Venues } from "./pages/venues/Venues";
import { Dashboard } from "./pages/dashboard/Dashboard";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/venues" element={<Venues/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
