/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Spacer,
  Text,
  useTheme,
  Container,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Home = (props) => {
  const theme = useTheme();

  const cards = {
    CS3220: {
      //   link: "/fastfashion/ajio-best-sellers",
      description: "Software Engineering",
      //   icon: <WorkspacePremium style={{ height: 32, width: 32 }} />,
      //   image: vm3
    },
    CS3221: {
      //   link: "/fastfashion/ajio-search-interactions",
      description: "Software Engineering",
      //   icon: <AdsClick style={{ height: 32, width: 32 }} />,
      //   image: analytics3
    },
    CS3222: {
      //   link: "/fastfashion/trends-offline",
      description: "Software Engineering",
      //   image: retail
    },
    CS3223: {
      //   link: "/fastfashion/trends-offline",
      description: "Software Engineering",
      //   image: retail
    },
    CS3224: {
      //   link: "/fastfashion/trends-offline",
      description: "Software Engineering",
      //   image: retail
    },
    CS3225: {
      //   link: "/fastfashion/trends-offline",
      description: "Software Engineering",
      //   image: retail
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
            Welcome to ProjectPilot!
          </Text>
          <Text
            style={{
              fontSize: "20px",
              color: "#444444",
              fontFamily: "Hanken Grotesk",
            }}
          >
            View your current courses here
          </Text>
        </Flex>
      </Flex>
      <Flex p="30px" justifyContent={"center"} alignItems={"center"}>
        <Flex my="50px" w="70%" wrap="wrap" justifyContent={"space-between"}>
          {Object.keys(cards).map((e) => {
            const card = cards[e];
            return (
              <Flex
                className="parent"
                direction={"column"}
                style={{
                  //   backgroundColor: "#efeafa",
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
                  <ArrowForwardIcon style={{ width: "30px", height: "30px" }} />
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;