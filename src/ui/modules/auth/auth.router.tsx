import {
  redirect,
  RouteObject,
} from "react-router";
import LoginPage from "./pages/login.page";
import RegisterPage from "./pages/register.page";

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
    path: 'register',
    Component: RegisterPage
  },
]

export default router