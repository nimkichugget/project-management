import React from 'react';
import { Flex, Spacer, Text, Container } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; 
library.add(fab);

const AppBar = ({ onLogout }) => {
  return (
    <Container style={{ padding: "20px 50px" }}>
      <Flex
        alignItems="center"
        justifyContent={"center"}
      >
        <Link to="/home" style={{textDecoration: "none"}}>
          <Flex>
            <FontAwesomeIcon icon="fab fa-telegram-plane" style={{color: "#B197FC", height: "40px", width: "40px" }} />
            <Text
              style={{
                margin: "0px 20px",
                color: "black",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              ProjectPilot
            </Text>
          </Flex>
        </Link>
        <Spacer />
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap="30px"
          style={{
            fontFamily: "Raleway",
            fontSize: "18px",
          }}
        >
          <Link style={{textDecoration: "none", color: "black"}} _hover={{ color: "gray" }} to="/home">Home</Link>
          <Link style={{textDecoration: "none", color: "black"}} _hover={{ color: "gray" }} to="/about-us">About Us</Link>
          <Text style={{textDecoration: "none", color: "black"}} _hover={{ color: "gray" }} onClick={() => onLogout && onLogout() }>Log Out</Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default AppBar;
