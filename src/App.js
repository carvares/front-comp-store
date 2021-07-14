import { BrowserRouter, Route, Switch } from "react-router-dom";
// import SignUp from "./components/sign-up/SignUp";
import LogIn from "./components/auth/login/LogIn";
import Register from "./components/auth/register/Register";
import ProductsPage from "./components/products/ProductsPage";
import UserContext from "./components/UserContext";
import Cart from "./components/cart/Cart";
import { useState } from "react";


export default function App() {

  const initialUserState = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const [user, setUser] = useState(initialUserState); 

  const createUser = (user) => {
		localStorage.setItem('user', JSON.stringify(user));
		setUser(user);
	};

	const removeUser = () => {
		localStorage.removeItem('user');
		setUser(null);
	};
  if (!user && !["/login", "/register", "/"].includes(window.location.pathname))
    window.location.pathname = "/login";
    else if (user && ["/login", "/register"].includes(window.location.pathname))
    window.location.pathname = "/";

  return (
    <BrowserRouter>

      <Switch>
        <UserContext.Provider value={{ user, createUser, removeUser }}>

            <Route path={"/"} exact component={ProductsPage} />
   
            <Route path={"/login"} exact component={LogIn} />

            <Route path={"/register"} exact component={Register} />

            <Route path= {"/my-cart"} exact component={Cart}/>

        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}