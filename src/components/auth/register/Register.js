import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import cpfTools from 'cpf';

import Header from "../shared/Header";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { GrayBox, Card, RegisterBox } from "../shared/style"
import {API} from "../../config/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState(null);
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
          cpf,
          email,
          password,
        });
        history.push("/login");
      } catch (error) {
        if (
          error.hasOwnProperty("message") &&
          error.message === "Network Error"
        )
          setError("Não foi possivel conectar ao servidor!");
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
    if (!cpfValidator(cpf)) {
        setError("CPF inválido!");
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

  function cpfValidator (value, _) {
    const formated = cpfTools.format(value)
    if (cpfTools.isValid(formated)) return true;
    else return false;
  } 

    return (
        <>
          <Header/>
          <Card/>
          <RegisterBox>
            <h1>Digite o seu e-mail e senha</h1>
            {error ? <div>{error}</div> : null}
            <Form onSubmit={register}>
                <div>
                    <Input
                    placeholder={"Nome"}
                    type={"text"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    border={"none"}
                    borderBottom={"1px solid gray"}
                    />
                    <span/>
                    <Input
                    placeholder={"CPF"}
                    type={"number"}
                    value={cpf}
                    onChange={(e) => setCPF(e.target.value)}
                    required
                    border={"none"}
                    borderBottom={"1px solid gray"}
                    />
                </div>
                <div>
                    <Input
                    placeholder={"E-mail"}
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    border={"none"}
                    borderBottom={"1px solid gray"}
                    />
                </div>
                <div>
                    <Input
                    placeholder={"Senha"}
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    border={"none"}
                    borderBottom={"1px solid gray"}
                    />
                    <span/>
                    <Input
                    placeholder={"Confirme a senha"}
                    type={"password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id={"confirm"}
                    required
                    border={"none"}
                    borderBottom={"1px solid gray"}
                    />
                </div>
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
                <Button
                text={"Já possui conta? Faça login!"}
                background={"#FFF"}
                color={"#3483fa"}
                onClick={() => history.push("/login")}
                />
            </Form>
            </RegisterBox>
          <GrayBox/>
        </>
    );
}