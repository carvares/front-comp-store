import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import Header from "../shared/Header";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { GrayBox, Card, LogInBox } from "../shared/style";
import { API } from "../../config/api";
import UserContext from "../../UserContext";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { createUser } = useContext(UserContext);
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
        if (!response.status === 200) throw new Error(response.status);
        createUser(response.data);
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

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      <Header />
      <Card />
      <LogInBox width={width}>
        <h1>Digite o seu e-mail e senha</h1>
        {error ? <div>{error}</div> : null}
        <Form onSubmit={login}>
          <Input
            placeholder={"E-mail"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            margin={"0px 0px 20px"}
            border={"none"}
            borderBottom={"1px solid gray"}
          />
          <Input
            placeholder={"Senha"}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin={"0px 0px 20px"}
            border={"none"}
            borderBottom={"1px solid gray"}
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
      <GrayBox />
    </>
  );
}
