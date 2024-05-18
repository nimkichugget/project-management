/* eslint-disable no-unused-vars */
import { Box, Flex, Image, Spacer, Text, Container } from "@chakra-ui/react";
//import { StarIcon } from "@chakra-ui/icons";
// import Container from '../../Components/Container/Container';
// import { Link } from 'react-router-dom';
// import profile from '../../../Static/profile.jpeg';
// import './AppBar.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab);

const AppBar = (props) => {
  return (
    <Container isCollapsed={props.isCollapsed} style={{ padding: "20px 50px" }}>
      <Flex
        w={props.isCollapsed ? "100%" : "100%"}
        alignItems="center"
        justifyContent={"center"}
      >
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
          <Text _hover={{ color: "gray" }}>Home</Text>
          <Text _hover={{ color: "gray" }}>About Us</Text>
          <Text _hover={{ color: "gray" }}>Log Out</Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default AppBar;
