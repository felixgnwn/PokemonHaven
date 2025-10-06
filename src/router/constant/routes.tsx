import Home from "../../pages/Home";
import PokeDex from "../../pages/PokeDex";

export const ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokedex",
    element: <PokeDex />,
  },
];
