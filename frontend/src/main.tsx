import React from "react";
import ReactDOM from "react-dom/client";

import AppRoutes from "./routes/Routes";
import { AppProvider } from "./store/index.store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>
);
