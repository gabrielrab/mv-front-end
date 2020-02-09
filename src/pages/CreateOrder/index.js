import React, { useContext } from "react";
import { Grommet, Box, Heading, Button, Form, CheckBox } from "grommet";
import { grommet } from "grommet/themes";
import Input from "../../components/Input";
import Select from "../../components/Select";
import "./styles.css";
import { AccountContext } from "../../services/context";

export default function Index({ history }) {
  const { user } = useContext(AccountContext);

  return (
    <>
      <Grommet plain theme={grommet}>
        <Box pad="medium" className="container-login">
          <Heading level="2">{user.name}, crie um novo pedido</Heading>
          <Form className="form-order">
            <Input name="width" type="number" label="Altura:" />
            <Input name="height" type="number" label="Largura:" />
            <Select name="glass_type" label="Tipo do vidro:">
              <option hidden></option>
              <option>Espelhado</option>
              <option>Blindex</option>
            </Select>
            <Select name="glass_color" label="Cor do vidro:">
              <option hidden></option>
              <option>Espelhado</option>
              <option>Fume</option>
              <option>Black</option>
            </Select>
            <Select name="glass_format" label="Formato do vidro:">
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
