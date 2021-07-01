import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import Header from "../shared/Header";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { GrayBox, LogInBox } from "../shared/style"
import {API} from "../../config/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  async function register(event) {
    event.preventDefault();
    if (validInfos()) {
      try {
        setLoader(true);
        await axios.post(`${API}/api/register`, {
          name,
          email,
          password,
        });
        history.push("/login");
      } catch (error) {
        if (
          error.hasOwnProperty("message") &&
          error.message === "Network Error"
        )
          setError("Não foi possvel conectar ao servidor!");
        if (error.response !== undefined && error.response.status === 409)
          setError("Usuario já cadastrado!");
        if (error.response !== undefined && error.response.status === 400)
          setError("Informações inválidas!");
        console.log(error);
      }
    }
    setLoader(false);
  }

  function validInfos() {
    if (name.length < 3) {
      setError("Nome mínimo de 3 caracteres!");
      return false;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return false;
    }
    if (password.length < 8) {
      setError("Senha mínima de 8 caracteres!");
      return false;
    }
    return true;
  }

    return (
        <>
          <Header/>  
          <LogInBox>
            <h1>Digite o seu e-mail e senha</h1>
            <Form onSubmit={register}>
                <Input
                placeholder={"Nome"}
                type={"text"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
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
                <Input
                placeholder={"Confirme a senha"}
                type={"password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id={"confirm"}
                required
                />
                <Button
                type={"submit"}
                text={
                    loader ? (
                    <Loader type="ThreeDots" color="#FFF" height={46} width={46} />
                    ) : (
                    "Cadastrar"
                    )
                }
                />
            </Form>
            </LogInBox>
          <GrayBox/>
        </>
    );
}