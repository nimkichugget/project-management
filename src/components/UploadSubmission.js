import React from 'react';
import { Flex, Button } from "@chakra-ui/react";
import image from "./UploadSubmission.jpeg"

function UploadSubmission() {
  return (
    <Flex width="100%" padding="10px" borderRadius="20px" justifyContent={"space-around"} gap="10px" direction={"column"} style={{ marginBottom: "20px" }} >
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        gap="10px"
      >
        <img 
          src={image} 
          alt="Man putting papers in a folder." 
          style={{
            width: '40%',
            height: '40%',
            borderRadius: '10px',
            objectFit: 'cover' // Example for scaling and cropping
          }}
        />
      </Flex>
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        gap="10px"
      >
        <a href="https://forms.office.com/r/uRnrGjNH5D">
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
          >
            Upload Submission
          </Button>
        </a>
      </Flex>
    </Flex>
  );
}

export default UploadSubmission