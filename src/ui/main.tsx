import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import mainRouter from "@/ui/modules/router"

import { ThemeProvider } from '@mui/material/styles';
import theme from "./mui-theme";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={mainRouter} />
  </ThemeProvider>
);
