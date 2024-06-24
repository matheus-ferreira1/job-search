import { createBrowserRouter } from "react-router-dom";
import { ThemeModeToggle } from "./components/mode-toggle";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>home</h1>
        <ThemeModeToggle />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);
