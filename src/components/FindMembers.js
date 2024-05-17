import { Flex, Text, Container, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function FindMembers({ isOpen, onClose }) {

    const cards = {
        Team1: {
            member1: "Vineet Kumar",
            member2: "Vineet Kumar",
        },
        Team2: {
            member1: "Vineet Kumar",
            member2: "Vineet Kumar",
            member3: "Vineet Kumar",
            member4: "Vineet Kumar",
        },
        Team3: {
            member1: "Vineet Kumar",
            member2: "Vineet Kumar",
            member3: "Vineet Kumar",
            member4: "Saathvika Jali",
        },
        Team4: {
            member1: "Vineet Kumar",
            member2: "Vineet Kumar",
            member3: "Vineet Kumar",
            member4: "Vineet Kumar",
        },
        Team5: {
            member1: "Vineet Kumar",
            member2: "Vineet Kumar",
            member3: "Vineet Kumar",
            member4: "Vineet Kumar",
        },
        Team6: {
            member1: "Vineet Kumar",
            member2: "Vineet Kumar",
            member3: "Vineet Kumar",
            member4: "Vineet Kumar",
            isFull: true,
        },
    };
    return (
        <Modal style={{ position: 'absolute' }} scrollBehavior={'inside'} isOpen={isOpen} onClose={onClose} maxW="300px" maxH="300px" >
            <ModalOverlay bg="white" />
            <ModalContent>
                <ModalHeader>
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
                            Current teams
                        </Text>
                        <hr 
                            style = {{
                                color: "#d9d9d9",
                                height: 1,
                                width: "90%"
                            }}
                        />
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
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
                                <Flex
                                    style={{
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        alignSelf: "center"
                                    }}
                                >
                                    <Text
                                        color={"black"}
                                        fontFamily={"Jost"}
                                        fontWeight={"bold"}
                                        fontSize={20}
                                    >
                                        Request a slot
                                    </Text>
                                    <ArrowForwardIcon style={{ width: "30px", height: "30px" }} />
                                </Flex>
                                </Flex>
                            </Flex>
                            );
                        })}
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
  }

export default FindMembers