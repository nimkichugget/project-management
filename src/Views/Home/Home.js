/* eslint-disable no-unused-vars */
import {
  Flex,
  Spacer,
  Text,
  useTheme,
  Container,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Home = (props) => {
  const theme = useTheme();

  const cards = {
    CS3220: {
      description: "Software Engineering",
    },
    CS3221: {
      description: "Software Engineering",
    },
    CS3222: {
      description: "Software Engineering",
    },
    CS3223: {
      description: "Software Engineering",
    },
    CS3224: {
      description: "Software Engineering",
    },
    CS3225: {
      description: "Software Engineering",
    },
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
              fontSize: "45px",
              fontWeight: "bold",
              fontFamily: "Hanken Grotesk",
            }}
          >
            Welcome Saathvika
          </Text>
          <Text
            style={{
              fontSize: "20px",
              color: "#444444",
              fontFamily: "Hanken Grotesk",
            }}
          >
            Here are your current courses
          </Text>
        </Flex>
      </Flex>
      <Flex p="30px" justifyContent={"center"} alignItems={"center"}>
        <Flex my="50px" w="70%" wrap="wrap" justifyContent={"space-between"}>
          {Object.keys(cards).map((e) => {
            const card = cards[e];
            return (
              <Link to="/view-project" key={e} style={{ textDecoration: 'none' }}>
                <Flex
                  className="parent"
                  direction={"column"}
                  style={{
                    backgroundColor: "linear-gradient(to bottom, white, #D5E5FF)",
                    padding: "20px",
                    // height: "230px",
                    fontSize: "40px",
                    boxShadow: "#dddddd 0px 0px 20px 0px",
                    borderRadius: "20px",
                    width: "250px",
                    marginBottom: "25px",
                    transition: "all 0.4s ease"
                  }}
                  _hover={{
                    backgroundColor: "#efeafa",
                    boxShadow: "none !important",
                  }}
                  key={e}
                  w="32%"
                  onClick={() => { window.location.href = "/view-project"; }}
                >
                  <Text fontFamily={"Jost"} fontWeight={"700"} fontSize={24}>
                    {e}
                  </Text>
                  <Flex
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      color={"gray"}
                      fontFamily={"Jost"}
                      fontWeight={"regular"}
                      fontSize={20}
                    >
                      {card.description}
                    </Text>
                    <ArrowForwardIcon style={{ width: "30px", height: "30px", color: "gray" }} />
                  </Flex>
                </Flex>
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
