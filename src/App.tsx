// src/App.tsx
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";          // <= default import
import About from "./pages/About";
import Members from "./pages/Members";
import Donors from "./pages/Donors";
import Contact from "./pages/Contact";
import "./styles/index.css";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="members" element={<Members />} />
        <Route path="donors" element={<Donors />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
