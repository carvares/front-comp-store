import { BrowserRouter, Route, Switch } from "react-router-dom";
// import SignUp from "./components/sign-up/SignUp";
import LogIn from "./components/auth/login/LogIn";
import Register from "./components/auth/register/Register";
import ProductsPage from "./components/products/ProductsPage";
import UserContext from "./components/UserContext";
import Cart from "./components/cart/Cart";
import { useEffect, useState } from "react";
import axios from "axios";

// const getItensToBuy = (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const request = axios.get("http://localhost:4000/cart", config);

//   request.catch((err) => {
//     alert("Houve uma falha ao obter os posts, por favor atualize a página!");
//   });
//   return request;
// };

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

  return (
    <BrowserRouter>

      <Switch>
        <UserContext.Provider value={{ user, createUser, removeUser }}>

            <Route path={"/"} exact component={ProductsPage} />
   
            <Route path={"/login"} exact component={LogIn} />

            <Route path={"/register"} exact component={Register} />

            {/* <PrivateRoute path={"/my-posts"} component={Mychart} /> */}
            <Route path= {"/my-cart"} exact component={Cart}/>

        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}