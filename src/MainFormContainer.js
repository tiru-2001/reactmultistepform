import React, { useContext } from "react";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import FirstStep from "./component/FirstStep";
import SecondStep from "./component/SecondStep";
import ThirdStep from "./component/ThirdStep";
import { dataa } from "./StepContext";

const MainFormContainer = () => {
  const { step } = useContext(dataa);

  const returnPages = (steps) => {
    switch (steps) {
      case 1:
        return <FirstStep />;

      case 2:
        return <SecondStep />;

      case 3:
        return <ThirdStep />;

      default:
        return <Typography>Only 3pages</Typography>;
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <Typography mb="30px" variant="h4" textAlign={"center"}>
        React multistepform
      </Typography>
      <Stepper width="16%" activeStep={step - 1} orientation="horizontal">
        <Step>
          <StepLabel>First</StepLabel>
        </Step>
        <Step>
          <StepLabel>Second</StepLabel>
        </Step>

        <Step>
          <StepLabel>Third</StepLabel>
        </Step>
      </Stepper>

      <br />
      {returnPages(step)}
    </Box>
  );
};

export default MainFormContainer;
