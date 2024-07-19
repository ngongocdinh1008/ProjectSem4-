import { Home, Profile, SignIn, SignUp } from "@/pages";
import EcommerceSection12 from "./components/product";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Product",
    path: "/product",
    element: <EcommerceSection12 />,
  },
];

export default routes;
