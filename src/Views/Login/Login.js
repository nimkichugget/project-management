import React, { useState } from "react";
import banner from "../Login/banner.png";
import imagedw from "../Login/imagedw.png";
import { Flex, Button, Text } from "@chakra-ui/react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Modal, Box, Typography, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [name, setName] = useState(""); // Add state for name
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onLogin(); // Pass the name to onLogin after successful login
      navigate("/home"); // Navigate to home page after login
    } catch (error) {
      alert("Failed to log in");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      onLogin(); // Pass the name to onLogin after successful signup
      navigate("/home"); // Navigate to home page after signup
    } catch (error) {
      console.error("Error creating user account:", error.message);
      alert(`Failed to create an account: ${error.message}`);
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

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  return (
    <Flex padding={0} gap="10px" direction="column">
      <Flex position="relative" style={{ justifyContent: "center", alignItems: "center" }}>
        <img src={banner} alt="Login Banner" style={{ zIndex: -1, height: "512px", width: "100vw" }} />
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
      <Flex style={{ justifyContent: "center", alignItems: "center", padding: "10px", marginTop: "20px" }}>
        <Flex direction="column" justifyContent="center" alignItems="center">
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
          <Text style={{ fontSize: "20px", color: "#596B7E", fontFamily: "Public Sans" }}>
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
              onClick={handleOpenLogin}
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
              onClick={handleOpenSignup}
            >
              Sign Up
            </Button>
          </Flex>
          <Modal
            open={openLogin}
            onClose={handleCloseLogin}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form onSubmit={handleLoginSubmit}>
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Login
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Stack direction="column" spacing={2} alignItems="center" width="100%" justifyContent="center">
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
                  </Stack>
                  <Button
                    type="submit"
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
            open={openSignup}
            onClose={handleCloseSignup}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form onSubmit={handleSignupSubmit}>
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Sign Up
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Stack direction="column" spacing={2} alignItems="center" width="100%" justifyContent="center">
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
                  </Stack>
                  <Button
                    type="submit"
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
