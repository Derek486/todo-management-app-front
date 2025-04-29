import {
  redirect,
  RouteObject,
} from "react-router";
import LoginPage from "./pages/login.page";

const router: RouteObject[] = [
  {
    index: true,
    loader: () => redirect('login')
  },
  {
    path: 'login',
    Component: LoginPage
  },
  {
    path: '*',
    loader: () => redirect('login')
  }
]

export default router