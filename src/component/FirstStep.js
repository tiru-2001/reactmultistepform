import { Button, Stack, TextField, Box } from "@mui/material";
import { dataa } from "../StepContext";
import React, { useContext } from "react";

const FirstStep = () => {
  const { setstep, data, setfunction } = useContext(dataa);

  return (
    <Stack direction="column" spacing="5px">
      <TextField
        variant="outlined"
        autoComplete="off"
        color="warning"
        label="Enter the Firstname"
        required
        name="firstname"
        onChange={setfunction}
        value={data.firstname}
      />
      <TextField
        variant="outlined"
        autoComplete="off"
        color="warning"
        label="Enter the lastname"
        required
        value={data.lastname}
        onChange={setfunction}
        name="lastname"
      />
      <TextField
        variant="outlined"
        autoComplete="off"
        color="warning"
        label="Enter the email"
        required
        value={data.email}
        name="email"
        onChange={setfunction}
      />
      <Box textAlign={"center"}>
        <Button onClick={() => setstep(2)} variant="contained">
          next
        </Button>
      </Box>
    </Stack>
  );
};

export default FirstStep;
