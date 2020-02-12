import React, { useContext, useState } from "react";
import { Grommet, Box, Heading, Button, Form, CheckBox } from "grommet";
import { grommet } from "grommet/themes";
import Input from "../../components/Input";
import Select from "../../components/Select";
import "./styles.css";
import { AccountContext } from "../../services/context";

export default function Index({ history }) {
  const { user } = useContext(AccountContext);
  const [order, setOrder] = useState({});

  const handleChange = event => {
    const auxValues = { ...order };
    auxValues[event.target.name] = event.target.value;
    setOrder(auxValues);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(order);
    try {
      //
    } catch (error) {
      //
    }
  };
  return (
    <>
      <Grommet plain theme={grommet}>
        <Box pad="medium" className="container-login">
          <Heading level="2">{user.name}, crie um novo pedido</Heading>
          <Form className="form-order" onSubmit={handleSubmit}>
            <Input
              name="width"
              type="number"
              label="Altura:"
              onChange={handleChange}
            />
            <Input
              name="height"
              type="number"
              label="Largura:"
              onChange={handleChange}
            />
            <Select
              name="glass_type"
              label="Tipo do vidro:"
              onChange={handleChange}
            >
              <option hidden></option>
              <option>Espelhado</option>
              <option>Blindex</option>
            </Select>
            <Select
              name="glass_color"
              label="Cor do vidro:"
              onChange={handleChange}
            >
              <option hidden></option>
              <option>Espelhado</option>
              <option>Fume</option>
              <option>Black</option>
            </Select>
            <Select
              name="glass_format"
              label="Formato do vidro:"
              onChange={handleChange}
            >
              <option hidden></option>
              <option>Cantos arredondados</option>
              <option>Oval</option>
              <option>Retangular</option>
            </Select>
            {/* COLOCAR CHECKBOX DE SE VAI */}
            <Button label="Realizar Pedido" primary type="submit" />
          </Form>
        </Box>
      </Grommet>
    </>
  );
}
