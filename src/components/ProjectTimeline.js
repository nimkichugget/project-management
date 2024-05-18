import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Text } from "@chakra-ui/react"

const steps = [
    {
        title: 'Software Requirement Specifications',
        time: '4:05 PM',
        date: '25/08/23',
        isCompleted: true,
    },
    {
        title: "Software Design Specifications",
        time: "4:05 PM",
        date: "25/08/23",
        isCompleted: true,
    },
    {
        title: "More submissions",
        time: "11:34 AM",
        date: "25/08/23",
        isCompleted: false,
    },
    {
        title: "More submissions",
        time: "11:34 AM",
        date: "25/08/23",
        isCompleted: false,
    },
    {
        title: "More submissions",
        time: "11:34 AM",
        date: "25/08/23",
        isCompleted: false,
    },
    {
        title: "More submissions",
        time: "11:34 AM",
        date: "25/08/23",
        isCompleted: false,
    },
    {
        title: "Presentation",
        time: "11:34 AM",
        date: "25/08/23",
        isCompleted: false,
    },
];

const theme = createTheme({
    typography: {
        fontFamily: ['Public Sans', 'sans-serif'].join(','), // Add Public Sans to the font stack
      },
  palette: {
    primary: {
      main: '#42aa53', // Your desired purple shade
    },
  },
  overrides: {
    MuiStepper: {
      root: {
        backgroundColor: 'transparent', // Optional for better contrast
      },
      horizontal: {
        '& .MuiStepConnector-line': {
          borderColor: '#7c4dff!important', // Adjust connector color
        },
      },
      vertical: {
        '& .MuiStepConnector-line': {
          borderColor: '#7c4dff!important', // Adjust connector color
        },
        '& .MuiStep-completed .MuiStepIcon-root': {
          color: '#42aa53', // Color for completed step icon
        },
        '& .MuiStep-active .MuiStepIcon-root': {
          color: '#6741a0', // Color for active step icon
        },
      },
    },
  },
});

export default function ProjectTimeline() {
  const [activeStep, setActiveStep] = React.useState(2);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === step.length ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                <Text
                    style={{
                        fontSize: "24px",
                        color: "black",
                        fontFamily: "Public Sans",
                    }}
                    marginBottom={0}
                >
                    {step.title}
                </Text>
                <Text
                    style={{
                        fontSize: "16px",
                        color: "#666666",
                        fontFamily: "Inter",
                    }}
                    marginTop={0}
                >
                    {step.time} on {step.date}
                </Text>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
          </Paper>
        )}
      </Box>
    </ThemeProvider>
  );
}