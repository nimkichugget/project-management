import React, { useState } from "react";
import banner from "../Login/banner.png";
import imagedw from "../Login/imagedw.png";
import { useAuth } from "../../AuthContext";
import { Flex, Button, Text } from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import PersonIcon from "@mui/icons-material/Person";
import { Modal, Box, Typography, Stack, TextField, Avatar } from "@mui/material";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Redirect or do something after login
    } catch {
      alert("Failed to log in");
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect or do something after signup
    } catch {
      alert("Failed to create an account");
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <Flex padding={0} gap="10px" direction={"column"}>
      <Flex
        position="relative"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <img
          src={banner}
          alt="Login Banner"
          style={{ zIndex: -1, height: "512px", width: "100vw" }}
        />{" "}
        {/* Set z-index to -1 to place behind imagedw */}
        <img
          src={imagedw}
          alt="Login Image"
          style={{
            position: "absolute",
            height: "528px",
            width: "528px",
            top: "10%",
            margin: "auto",
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
              color: "#6142AA",
              fontWeight: "bold",
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
          <Flex direction="row" justifyContent="space-between">
            <Button
              size="lg"
              style={{
                borderRadius: "40px",
                padding: "8px 18px",
                backgroundColor: "#6741a0",
                color: "white",
                fontFamily: "Public Sans",
                border: "1px solid white",
                fontSize: "24px",
                marginTop: "40px",
                marginRight: "20px",
                height: "60px",
                width: "200px",
              }}
              _hover={{ opacity: 0.8 }}
              onClick={handleOpen1}
            >
              Login
            </Button>
            <Button
              size="lg"
              style={{
                borderRadius: "40px",
                padding: "8px 18px",
                backgroundColor: "#6741a0",
                color: "white",
                fontFamily: "Public Sans",
                border: "1px solid white",
                fontSize: "24px",
                marginLeft: "20px",
                marginTop: "40px",
                height: "60px",
                width: "200px",
              }}
              _hover={{ opacity: 0.8 }}
              onClick={handleOpen2}
            >
              Sign Up
            </Button>
          </Flex>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form onSubmit={handleSubmit1}>
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Login
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Stack direction="column" spacing={2} alignItems="center" width="100%" justifyContent="center">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <TextField
                        id="email"
                        label="Enter your email"
                        variant="outlined"
                        fullWidth
                        autoComplete="email"
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        autoComplete="current-password"
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </Stack>
                  <Button
                    size="lg"
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
                  >
                    Login
                  </Button>
                </Typography>
              </Box>
            </form>
          </Modal>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form onSubmit={handleSubmit2}>
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Sign Up
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Stack direction="column" spacing={2} alignItems="center" width="100%" justifyContent="center">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <TextField
                        id="email"
                        label="Enter your email"
                        variant="outlined"
                        fullWidth
                        autoComplete="email"
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        autoComplete="current-password"
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </Stack>
                  <Button
                    size="lg"
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
                  >
                    Sign Up
                  </Button>
                </Typography>
              </Box>
            </form>
          </Modal>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Login;
