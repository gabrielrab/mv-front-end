import React, { useContext, useEffect } from "react";
import { Grommet, Box, Heading, Button } from "grommet";
import { grommet } from "grommet/themes";

import { AccountContext } from "../services/context";

export default function Index({ history }) {
  const { user } = useContext(AccountContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <Grommet plain theme={grommet}>
        <Box pad="medium" className="container-login">
          <Heading level="2">Index page</Heading>
          <Button label="Login" primary type="submit" />
        </Box>
      </Grommet>
    </>
  );
}
