import React from 'react';
import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps, } from "@chakra-ui/react";

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
]

function ProjectTimeline () {
    const { activeStep } = useSteps({
        index: 3,
        count: steps.length,
    });

    return (
        <Stepper index={activeStep} orientation='vertical' height='800px' gap='0' colorScheme='purple'>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.time} on {step.date}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
    );
};

export default ProjectTimeline