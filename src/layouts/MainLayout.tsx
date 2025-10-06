// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />

      <main className="container mx-auto flex items-center justify-between py-5">
        <Outlet />
      </main>
    </div>
  );
}
