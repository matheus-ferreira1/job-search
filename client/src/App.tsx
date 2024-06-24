import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { routes } from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
