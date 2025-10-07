import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <footer className="mx-auto max-w-5xl px-4 py-12 subtle">
        © {new Date().getFullYear()} Padam Gurung Fund
      </footer>
    </div>
  );
}
