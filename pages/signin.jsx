import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: "/",
    });
    console.log(status);

    if (status.ok) {
      router.push(status.url);
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
          <Typography gutterBottom variant="body1">
            Sign in to new skills
          </Typography>
          <Box>
            <Button onClick={() => signIn("google")}>
              Sign in with google
            </Button>
            <Button onClick={() => signIn("google")}>
              Sign in with facebook
            </Button>
          </Box>
          <Divider sx={{ my: 3 }}>Or</Divider>
          <FormGroup>
            <Grid
              container
              spacing={2}
              direction="column"
              justifyItems="center"
            >
              <Grid item>
                <TextField
                  sx={{ width: "100%" }}
                  required
                  label="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  sx={{ width: "100%" }}
                  required
                  type="password"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  sx={{ width: "100%", color: "white" }}
                  color="primary"
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit}
                >
                  <Typography gutterBottom sx={{ fontWeight: 300 }}>
                    Se connecter
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </FormGroup>
          <Typography variant="body1" gutterBottom mt={2}>
            you don’t have an account yet?{" "}
            <Link href="/signup">
              <Typography
                sx={{ cursor: "pointer" }}
                variant="body1"
                component="body1"
                color="primary"
              >
                Sign up
              </Typography>
            </Link>
          </Typography>
        </Container>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          position: "relative",
          textAlign: "center",
        }}
      >
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

export default Signin;

export async function getServersideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
