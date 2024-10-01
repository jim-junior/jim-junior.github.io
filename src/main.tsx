import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { HelmetProvider } from "react-helmet-async";
import { MDXProvider } from "@mdx-js/react";
import { COMPONENTS } from "./components/mdx-conponents.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <MDXProvider components={COMPONENTS}>
        <App>
          <RouterProvider router={router} />
        </App>
      </MDXProvider>
    </HelmetProvider>
  </React.StrictMode>
);
