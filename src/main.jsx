
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store.js";
import ThemeProvider from "./ThemeProvider.jsx";


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <ThemeProvider>
    <App />
    <ToastContainer position="top-center" />
    </ThemeProvider>
  
  </Provider>
);
