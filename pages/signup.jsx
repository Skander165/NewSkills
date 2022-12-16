import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess(null);
    setError(null);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (privacy) {
      try {
        setLoading(true);
        const res = await axios.post(
          "http://localhost:3000/api/auth/register",
          { fullName, username, email, password },
          config
        );

        //   window.location = "/auth";
        setSuccess(res.data.message);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    } else {
      setError("Please consent to the privacy policy");
    }
  };

  return (
    <Grid container direction="row" sx={{ height: "100vh" }}>
      <Grid
        sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        item
        xs={6}
      >
        <Container maxWidth="xs">
          <Typography gutterBottom>Sign up to new skills</Typography>
          <Box>
            <Button>Sign up with google</Button>
            <Button>Sign up with facebook</Button>
          </Box>
          <Divider sx={{ my: 3 }}>Or</Divider>
          <FormGroup>
            <Grid
              container
              spacing={2}
              direction="column"
              justifyItems="center"
            >
              <Grid
                item
                sx={{ display: "flex", justifyContent: "center", gap: 3 }}
              >
                <TextField
                  required
                  type="text"
                  label="Nom et prénom"
                  onChange={(e) => setFullName(e.target.value)}
                />
                <TextField
                  required
                  type="text"
                  label="Nom d'utilisateur"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  sx={{ width: "100%" }}
                  required
                  type="text"
                  label="Adresse Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item sx={{ position: "relative" }}>
                <TextField
                  sx={{
                    width: "100%",
                  }}
                  required
                  label="Mot de passe"
                  type={passwordVisibility ? "password" : "text"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <IconButton
                  sx={{ position: "absolute", top: "30%", right: 0 }}
                  onClick={() => setPasswordVisibility(!passwordVisibility)}
                >
                  <Visibility />
                </IconButton>
              </Grid>
            </Grid>
            <FormControlLabel
              sx={{ my: 1 }}
              control={<Checkbox />}
              label="Privacy & Policy"
              onClick={() => setPrivacy(!privacy)}
            />
            <Typography gutterBottom color="error">
              {error}
            </Typography>
            {/* <Typography gutterBottom color="success">
              {error}
            </Typography> */}
            <LoadingButton
              sx={{ width: "100%", color: "white" }}
              color="primary"
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              loading={loading}
            >
              <Typography gutterBottom sx={{ fontWeight: 300 }}>
                S'inscrire
              </Typography>
            </LoadingButton>
          </FormGroup>
          <Typography gutterBottom mt={2}>
            Already a member?{" "}
            <Link href="/signin">
              <Typography
                sx={{ cursor: "pointer" }}
                variant="body1"
                component="body1"
                color="primary"
              >
                Sign in
              </Typography>
            </Link>
          </Typography>
        </Container>
      </Grid>
      <Grid item md={6} sx={{ position: "relative", textAlign: "center" }}>
        <Image src="/assets/signUpRectangle.png" layout="fill" />
        <Typography
          gutterBottom
          variant="h3"
          sx={{ position: "absolute", top: "45%", left: "25%", color: "white" }}
        >
          Join Our Community
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Signup;
