import { Link, NavLink } from "react-router-dom";
import masterBall from "../assets/master-ball.png";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={masterBall}
            alt="Master Ball"
            className="size-14"
          />
          <h1 className="text-xl font-bold text-gray-800">Pokemon Haven</h1>
        </Link>

        <div className="flex items-center">
          <NavLink
            to="/pokedex"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Pokédex
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
