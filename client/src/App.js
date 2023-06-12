import logo from "./logo.svg";
import "./App.css";

// components
import NavBar from "./components/NavBar";
import Milestone from "./components/Milestone";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Milestone />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
