import React, { useContext } from "react";
import { Grommet, Box, Heading, Button } from "grommet";
import { grommet } from "grommet/themes";
import { useHistory } from "react-router-dom";
import { AccountContext } from "../services/context";

export default function Index() {
  const history = useHistory();
  const { user } = useContext(AccountContext);

  return (
    <>
      <Grommet plain theme={grommet}>
        <Box pad="medium" className="container-login">
          <Heading level="2">Olá {user.name}</Heading>
          <Button
            label="Novo pedido"
            primary
            onClick={e => history.push("/order")}
          />
        </Box>
      </Grommet>
    </>
  );
}
