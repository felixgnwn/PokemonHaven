import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { ROUTES } from "./constant/routes";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<MainLayout />}>
            {ROUTES.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Route>
    )
);