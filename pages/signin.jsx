import { Box, Button, Checkbox, Container, Divider, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const Signup = () => {


    return (
        <Grid container direction="row" sx={{ height: "100vh" }}>
            <Grid sx={{ display: "flex", alignItems: "center", textAlign: "center" }} item xs={6}>
                <Container maxWidth="xs"  >
                    <Typography gutterBottom variant="body1">Sign in to new skills</Typography>
                    <Box>
                        <Button onClick={() => signIn()}>Sign in with google</Button>
                        <Button>Sign in with facebook</Button>
                    </Box>
                    <Divider sx={{ my: 3 }}>Or</Divider>
                    <FormGroup>
                        <Grid container spacing={2} direction="column" justifyItems="center">
                            <Grid item><TextField
                                sx={{ width: "100%" }}
                                required
                                label="Nom d'utilisateur"
                            /></Grid>
                            <Grid item><TextField
                                sx={{ width: "100%" }}
                                required
                                type="password"
                                label="Mot de passe"
                            /></Grid>
                            <Grid item>
                                <Button sx={{ width: "100%", color: 'white' }} color="primary" variant='contained'><Typography gutterBottom sx={{ fontWeight: 300 }} >Se connecter</Typography></Button>
                            </Grid>
                        </Grid>
                    </FormGroup>
                    <Typography variant="body1" gutterBottom mt={2}>you don’t have an account yet? <Link href="/signup"><Typography sx={{ cursor: 'pointer' }} variant="body1" component="body1" color="primary">Sign up</Typography>
                    </Link></Typography>
                </Container>
            </Grid>
            <Grid item md={6} sx={{ position: "relative", textAlign: "center", backgroundColor: 'red' }}>
                <Image src="/assets/signUpRectangle.png" layout='fill' />
                <Typography gutterBottom variant="h3" sx={{ position: "absolute" }}>Join Our Community</Typography>
            </Grid>
        </Grid >
    )
}

export default Signup