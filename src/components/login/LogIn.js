import styled from "styled-components";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import Header from "./Header";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import {API} from "../config/api";

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
          </LogInBox>
          <GrayBox/>
        </>
    );
}

const GrayBox = styled.div`
  background: #e6e6e6;
  padding-top: calc(100% - 227px);
`;

const Card = styled.div`
  margin-top: 47px;
  height: 180px;
  background: #fff059;
`;

const LogInBox =  styled.div`
  height: 420px;
  width: 420px;
  background: white;
  position: fixed;
  top: 15%;
  left: calc(50% - 210px);
  border-radius: 5px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.15);
  color: black;
  padding: 0px 64px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;