/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Flex, Text } from "@chakra-ui/react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormTeam from "../components/FormTeam";

// const steps = [
//   { title: "Form a Team", description: "Contact Info" },
//   { title: "Project Timeline", description: "Date & Time" },
//   { title: "Submit Files", description: "Select Rooms" },
//   { title: "View Grades", description: "Select Rooms" },
// ];

const steps = [
  "Form a Team",
  "Project Timeline",
  "Submit Files",
  "View Grades",
];

const ViewProject = () => {
  // const { projectId } = useParams();
  // const [projectDetails, setProjectDetails] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const details = await fetchProjectDetails(projectId);
  //     setProjectDetails(details);
  //   };
  //   fetchData();
  // }, [projectId]);

  // if (!projectDetails) {
  //   return <div>Loading project details...</div>;
  // }
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#d0c1ef",
          padding: "20px 50px",
        }}
      >
        <Flex
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            style={{
              fontSize: "40px",
              // fontFamily: "Hanken Grotesk",
              fontFamily: "Poppins",
            }}
          >
            What&apos;s your main focus for today?
          </Text>
          <Text
            style={{
              fontSize: "24px",
              color: "#666666",
              fontFamily: "Hanken Grotesk",
            }}
          >
            CSS3220 - SOFTWARE ENGINEERING
          </Text>
        </Flex>
      </Flex>
      <Flex p="30px" justifyContent={"center"} alignItems={"center"}>
        <Box sx={{ width: "70%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          ) : activeStep === 0 ? (
              <Flex
                style={{ margin: "20px", padding: "20px" }}
                direction={"column"}
              >
                <FormTeam />
              </Flex>
          ) : activeStep === 1 ? (
            <>
              <Flex
                style={{ margin: "20px", padding: "20px" }}
                bg="pink"
                direction={"column"}
              ></Flex>
            </>
          ) : activeStep === 2 ? (
            <>
              <Flex
                style={{ margin: "20px", padding: "20px" }}
                bg="pink"
                direction={"column"}
              ></Flex>
            </>
          ) : null}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default ViewProject;
