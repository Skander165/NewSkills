import { Box, Button, Checkbox, Container, Divider, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
    return (
        <Grid container direction="row" sx={{ height: "100vh" }}>
            <Grid sx={{ display: "flex", alignItems: "center", textAlign: "center" }} item xs={6}>
                <Container maxWidth="xs"  >
                    <Typography gutterBottom>Sign up to new skills</Typography>
                    <Box>
                        <Button>Sign up with google</Button>
                        <Button>Sign up with facebook</Button>
                    </Box>
                    <Divider sx={{ my: 3 }}>Or</Divider>
                    <FormGroup>
                        <Grid container spacing={2} direction="column" justifyIntems="center">
                            <Grid item sx={{ display: "flex", justifyContent: 'center', gap: 3 }} >
                                <TextField
                                    required
                                    label="Nom et prénom"
                                />
                                <TextField
                                    required
                                    label="Nom d'utilisateur"
                                />
                            </Grid>
                            <Grid item><TextField
                                sx={{ width: "100%" }}
                                required
                                label="Adresse Email"
                            /></Grid>
                            <Grid item><TextField
                                sx={{ width: "100%" }}
                                required
                                label="Mot de passe"
                                type="password"
                            /></Grid>
                        </Grid>
                        <FormControlLabel sx={{ my: 3 }} control={<Checkbox />} label="Privacy & Policy" />
                        <Button sx={{ width: "100%", color: 'white' }} color="primary" variant='contained'><Typography gutterBottom sx={{ fontWeight: 300 }} >S'inscrire</Typography></Button>
                    </FormGroup>
                    <Typography gutterBottom mt={2}>Already a member? <Link href="/signin"><Typography sx={{ cursor: 'pointer' }} variant="body1" component="body1" color="primary">Sign in</Typography>
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