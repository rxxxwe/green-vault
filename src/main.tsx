import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.module.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./provider/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </>
);
