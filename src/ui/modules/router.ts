import {
  createBrowserRouter,
  redirect,
} from "react-router";
import authRouter from "./auth/auth.router"

const router = createBrowserRouter([
  {
    path: '/auth',
    children: authRouter
  },
  {
    path: '/*',
    loader: () => redirect('/auth')
  }
]);

export default router