import React from 'react';
import banner from "./banner.png";
import imagedw from "./imagedw.png";
import { Flex, Button, Text } from "@chakra-ui/react";

function Login() {
  return (
    <Flex padding={0} gap="10px" direction={"column"}>
        <Flex position="relative" style={{justifyContent: "center", alignItems: "center"}}>
            <img src={banner} alt="Login Banner" style={{ zIndex: -1, height:"512px", width: "100vw"}} /> {/* Set z-index to -1 to place behind imagedw */}
            <img
                src={imagedw}
                alt="Login Image"
                style={{
                    position: "absolute",
                    height: "528px",
                    width: "528px",
                    top: "10%",
                    margin: "auto"
                }}
            />
        </Flex>
        <Flex
            style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            marginTop: "20px",
            }}
        >
            <Flex
                direction="column"
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Text
                    style={{
                    fontSize: "45px",
                    fontFamily: "Domine",
                    color: "#6142AA"
                    }}
                    marginBottom={0}
                >
                    ProjectPilot
                </Text>
                <Text
                    style={{
                    fontSize: "20px",
                    color: "#596B7E",
                    fontFamily: "Public Sans",
                    }}
                >
                    NAVIGATE YOUR ACADEMIC PROJECTS WITH EASE
                </Text>
                <a>
                    <Button
                        size = "lg"
                        style={{
                        borderRadius: "40px",
                        padding: "8px 18px",
                        backgroundColor: "#6741a0",
                        color: "white",
                        fontFamily: "Public Sans",
                        border: "1px solid white",
                        fontSize: "24px",
                        marginTop: "40px",
                        height: "60px",
                        width: "200px",
                        }}
                        _hover={{ opacity: 0.8 }}
                        onClick={() => { window.location.href = "/home"; }}
                    >
                        Login
                    </Button>
                </a>
            </Flex>
      </Flex>
    </Flex>
  );
}

export default Login;
