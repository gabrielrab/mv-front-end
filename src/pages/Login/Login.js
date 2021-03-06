import React, { useState, useEffect, useContext } from "react";
import { Grommet, Box, Heading, Button, TextInput, Text } from "grommet";
import { grommet } from "grommet/themes";

import "./style.css";
import useForm from "../../hooks/useForm";
import api from "../../services/api";
import { AccountContext } from "../../services/context";

export default function Login({ history }) {
  const { user, setUser } = useContext(AccountContext);
  const [{ values }, handleChange, handleSubmit] = useForm();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("TOKEN");
    if (token !== null && token !== "undefined") {
      history.push("/");
    }
  });

  const login = async () => {
    //login
    const formData = new FormData();
    formData.append("user", values["user"]);
    formData.append("password", values["password"]);

    // eslint-disable-next-line
    const response = await api
      .post("/auth", {
        user: values["user"],
        password: values["password"]
      })
      .then(async res => {
        await window.localStorage.setItem("TOKEN", res.data.token);
        setUser(res.data);
        setMessage("");
        history.push("/");
      })
      .catch(err => {
        setMessage("Suas credenciais não conferem, tente novamente!");
      });
  };

  return (
    <Grommet plain theme={grommet}>
      <Box pad="medium" className="container-login">
        <form onSubmit={handleSubmit(login)}>
          <Heading level="2">Faça login no sistema</Heading>
          <TextInput
            placeholder="Nome de usuário"
            name="user"
            onChange={handleChange}
          />
          <TextInput
            placeholder="Senha"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Button label="Login" primary type="submit" />
          <Text color="status-error">{message}</Text>
        </form>
      </Box>
    </Grommet>
  );
}
