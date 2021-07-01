import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import Header from "../shared/Header";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { GrayBox, Card, LogInBox } from "../shared/style"
import {API} from "../../config/api";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  async function login(event) {
    event.preventDefault();
    if (password.length >= 8) {
      try {
        setLoader(true);
        const response = await axios.post(`${API}/api/login`, {
          email,
          password,
        });
        console.log(response);
        if (!response.status === 200) throw new Error(response.status);
        //createUser(response.data);
        history.push("/");
      } catch (error) {
        if (
          error.hasOwnProperty("message") &&
          error.message === "Network Error"
        )
          setError("Não foi possvel conectar ao servidor!");
        if (error.response !== undefined && error.response.status === 400)
          setError("Informações inválidas!");
        if (error.response !== undefined && error.response.status === 404)
          setError("Esse usuário não existe!");
        console.log(error);
      }
      setLoader(false);
    } else {
      setError("Senha mínima de 8 caracteres!");
    }
  }

    return (
        <>
          <Header/>  
          <Card/>
          <LogInBox>
            <h1>Digite o seu e-mail e senha</h1>
            <Form onSubmit={login}>
              <Input
                placeholder={"E-mail"}
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                placeholder={"Senha"}
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                type={"submit"}
                text={
                  loader ? (
                    <Loader type="ThreeDots" color="#FFF" height={46} width={46} />
                  ) : (
                    "Entrar"
                  )
                }
              />
            </Form>
            <Button
                text={"Crie sua conta!"}
                background={"#FFF"}
                color={"#3483fa"}
                onClick={() => history.push("/register")}
              />
          </LogInBox>
          <GrayBox/>
        </>
    );
}
