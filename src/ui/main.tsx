import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import mainRouter from "@/ui/modules/router"

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={mainRouter} />
);
