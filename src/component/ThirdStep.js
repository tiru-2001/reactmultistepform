import React, { useContext } from "react";
import { Stack, TextField, Button, Box } from "@mui/material";
import { dataa } from "../StepContext";
const ThirdStep = () => {
  const { step, setstep, data, setfunction, onforsubmit } = useContext(dataa);

  return (
    <Stack direction="column" spacing="5px">
      <TextField
        variant="outlined"
        autoComplete="off"
        color="warning"
        label="Enter the city"
        required
        value={data.city}
        name="city"
        onChange={setfunction}
      />
      <TextField
        variant="outlined"
        autoComplete="off"
        color="warning"
        label="Enter the landmark"
        required
        value={data.landmark}
        name="landmark"
        onChange={setfunction}
      />
      <TextField
        variant="outlined"
        autoComplete="off"
        color="warning"
        label="Enter the postalcode"
        required
        value={data.code}
        name="code"
        onChange={setfunction}
      />

      <Box textAlign={"center"}>
        {" "}
        <Button
          color="warning"
          onClick={() => setstep(step - 1)}
          variant="contained"
        >
          prev
        </Button>
        <Button
          sx={{
            display: "inlineblock",
            marginLeft: "10px",
            margin: "0px 0px 0px 10px",
          }}
          variant="contained"
          onClick={onforsubmit}
        >
          submit
        </Button>
      </Box>
    </Stack>
  );
};

export default ThirdStep;
