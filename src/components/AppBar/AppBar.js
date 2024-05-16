/* eslint-disable no-unused-vars */
import { Box, Flex, Image, Spacer, Text, Container } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
// import Container from '../../Components/Container/Container';
// import { Link } from 'react-router-dom';
// import profile from '../../../Static/profile.jpeg';
const AppBar = (props) => {
  return (
    <Container isCollapsed={props.isCollapsed} style={{ padding: "20px 50px" }}>
      <Flex
        w={props.isCollapsed ? "100%" : "100%"}
        alignItems="center"
        justifyContent={"center"}
      >
        <StarIcon w="40px" h="40px" />
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
