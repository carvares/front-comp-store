import { BrowserRouter, Route, Switch } from "react-router-dom";
// import SignUp from "./components/sign-up/SignUp";
import LogIn from "./components/login/LogIn";
import ProductsPage from "./components/products/ProductsPage";
import UserContext from "./components/UserContext";
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



  return (
    <BrowserRouter>

      <Switch>
        <UserContext.Provider value={{ user, setUser }}>

            <Route path={"/"} exact component={ProductsPage} />
   
            <Route path={"/login"} exact component={LogIn} />

            {/* <Route path="/sign-up" exact component={SignUp}></Route> */}

            {/* <PrivateRoute path={"/my-posts"} component={Mychart} /> */}

        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}