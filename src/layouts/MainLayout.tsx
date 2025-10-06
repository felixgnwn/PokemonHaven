// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />

      {/* This is where page content gets rendered */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
