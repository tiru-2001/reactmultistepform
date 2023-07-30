import React, { useContext } from "react";
import { Stack, TextField, Button, Box } from "@mui/material";
import { dataa } from "../StepContext";
const SecondStep = () => {
  const { step, setstep, data, setfunction } = useContext(dataa);

  return (
    <Stack direction="column" spacing="5px">
      <TextField
        variant="outlined"
        autoComplete="off"
        color="warning"
        label="Enter the age"
        required
        value={data.age}
        name="age"
        onChange={setfunction}
      />
      <TextField
        variant="outlined"
        autoComplete="off"
        color="warning"
        label="Enter the phonenumber"
        required
        value={data.number}
        name="number"
        onChange={setfunction}
      />
      <TextField
        variant="outlined"
        autoComplete="off"
        color="warning"
        label="Enter the id"
        required
        value={data.id}
        name="id"
        onChange={setfunction}
      />

      <Box direction="row" textAlign={"center"} spacing="10px">
        {" "}
        <Button
          color="warning"
          onClick={() => setstep(step - 1)}
          variant="contained"
        >
          prev
        </Button>
        <Button
          sx={{ display: "inlineblock", marginLeft: "10px" }}
          onClick={() => setstep(3)}
          variant="contained"
        >
          next
        </Button>
      </Box>
    </Stack>
  );
};

export default SecondStep;
