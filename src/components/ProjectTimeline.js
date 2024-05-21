/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Text, Flex, Button } from "@chakra-ui/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const steps = [
  {
    title: "Software Requirement Specifications",
    time: "4:05 PM",
    date: "25/08/23",
    isCompleted: true,
    link: "https://shorturl.at/JetLy",
  },
  {
    title: "Software Design Specifications",
    time: "4:05 PM",
    date: "25/08/23",
    isCompleted: true,
    link: "https://shorturl.at/JetLy",
  },
  {
    title: "More submissions",
    time: "11:34 AM",
    date: "25/08/23",
    isCompleted: false,
    link: "https://shorturl.at/JetLy",
  },
  {
    title: "More submissions",
    time: "11:34 AM",
    date: "25/08/23",
    isCompleted: false,
    link: "https://shorturl.at/JetLy",
  },
  {
    title: "More submissions",
    time: "11:34 AM",
    date: "25/08/23",
    isCompleted: false,
    link: "https://shorturl.at/JetLy",
  },
  {
    title: "More submissions",
    time: "11:34 AM",
    date: "25/08/23",
    isCompleted: false,
    link: "https://shorturl.at/JetLy",
  },
  {
    title: "Presentation",
    time: "11:34 AM",
    date: "25/08/23",
    isCompleted: false,
    link: "book-slot",
  },
];

const theme = createTheme({
  typography: {
    fontFamily: ["Public Sans", "sans-serif"].join(","), // Add Public Sans to the font stack
  },
  palette: {
    primary: {
      main: "#42aa53", // Your desired purple shade
    },
  },
  overrides: {
    MuiStepper: {
      root: {
        backgroundColor: "transparent", // Optional for better contrast
      },
      horizontal: {
        "& .MuiStepConnector-line": {
          borderColor: "#7c4dff!important", // Adjust connector color
        },
      },
      vertical: {
        "& .MuiStepConnector-line": {
          borderColor: "#7c4dff!important", // Adjust connector color
        },
        "& .MuiStep-completed .MuiStepIcon-root": {
          color: "#42aa53", // Color for completed step icon
        },
        "& .MuiStep-active .MuiStepIcon-root": {
          color: "#6741a0", // Color for active step icon
        },
      },
    },
  },
});

export default function ProjectTimeline() {
  const [activeStep, setActiveStep] = React.useState(2);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSlotClick = () => setIsCalendarOpen(true);
  const handleCalendarClose = () => setIsCalendarOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Box w="100%">
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
                <Flex
                  w="100%"
                  minWidth="max-content"
                  justifyContent={"space-between"}
                >
                  <Flex flexDirection="column">
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
                  </Flex>
                  {/* <Spacer /> */}
                  {step.link === "book-slot" ? (
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap="10px"
                    >
                      <Button
                        onClick={handleSlotClick}
                        cursor="pointer"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "gray",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                        _hover={{ color: "black !important" }}
                      >
                        Book Slot
                      </Button>
                      <ArrowForwardIcon
                        style={{
                          color: "gray",
                        }}
                      />
                    </Flex>
                  ) : (
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap="10px"
                    >
                      <Button
                        as="a"
                        href={step.link}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = step.link;
                        }}
                        cursor="pointer"
                        style={{
                          color: "gray",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                        _hover={{ color: "black !important" }}
                      >
                        View Attachments
                      </Button>
                      <ArrowForwardIcon style={{ color: "gray" }} />
                    </Flex>
                  )}
                </Flex>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
          </Paper>
        )}
        {isCalendarOpen && (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
              <DateCalendar onClose={handleCalendarClose} />
              <Button
                style={{
                  borderRadius: "20px",
                  padding: "8px 18px",
                  backgroundColor: "#6741a0",
                  color: "white",
                  fontFamily: "Hanken Grotesk",
                  fontWeight: "700",
                  border: "1px solid white",
                  fontSize: "16px",
                  marginTop: "40px",
                }}
                _hover={{ opacity: 0.8 }}
                onClick={handleCalendarClose}
              >
                Close Calendar
              </Button>
            </Box>
          </LocalizationProvider>
        )}
      </Box>
    </ThemeProvider>
  );
}
