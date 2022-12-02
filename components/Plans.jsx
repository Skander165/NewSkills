import { Box, Container, Divider, Grid, List, ListItem, styled, Switch, Typography } from '@mui/material'
import React from 'react'

const Plans = () => {

    return (
        <Container maxWidth="xl" sx={{ backgroundColor: 'secondary.main', p: 5 }}>
            <Container fixed>
                <Box sx={{ width: "50%", textAlign: "center", margin: "0 auto" }}>
                    <Typography color="white" gutterBottom variant="body1" textAlign='center'>Facilité de paiement</Typography>
                    <Typography color="white" gutterBottom variant="h4" textAlign='center'>Notre plan premium</Typography>
                    <Typography color="white" gutterBottom variant="body2" textAlign='center'>Bien que nous puissions personnaliser votre plan en fonction de vos besoins, la plupart des clients prévoient des services réguliers :</Typography>
                </Box>
                <Grid container alignItems="center" justifyContent="space-between" sx={{ mt: 4, flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' } }}>
                    <Grid item xs={12} md={5.5} sx={{ backgroundColor: 'white' }}>
                        <Box sx={{ borderBottom: "1px solid grey", py: 2, borderTop: "8px solid #15B0F8" }}>
                            <Typography variant="h4" textAlign='center' color="secondary" sx={{ fontWeight: "bold" }} >Plan mensuel</Typography>
                        </Box>
                        <Box sx={{ px: 5, py: 4 }}>

                            <Typography variant="h6">Ce que nous allons vous offrir dans ce pack</Typography>
                            <List sx={{
                                listStyleType: 'disc',
                                pl: 2,
                                '& .MuiListItem-root': {
                                    display: 'list-item',
                                },
                            }}>
                                <ListItem sx={{ pb: 0 }}>Validation automatique de votre projet</ListItem>
                                <ListItem sx={{ pb: 0 }}>Accés à toute les publications </ListItem>
                                <ListItem sx={{ pb: 0 }}>Suivi personnel avec des experts du domaine</ListItem>
                                <ListItem sx={{ pb: 0 }}>Validation automatique de votre projet</ListItem>
                                <ListItem sx={{ pb: 0 }}>Validation automatique de votre projet</ListItem>
                                <ListItem >Validation automatique de votre projet</ListItem>
                            </List>
                            <Typography sx={{ fontWeight: "bold" }} component='body2' variant="h4">131,25 USD</Typography>
                            <Typography component='body2' variant="body1">avec 23% de rédution</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5.5} sx={{ backgroundColor: 'white' }}>
                        <Box sx={{ borderBottom: "1px solid grey", py: 2, borderTop: "8px solid #15B0F8" }}>
                            <Typography variant="h4" textAlign='center' color="secondary" sx={{ fontWeight: "bold" }} >Plan annuel</Typography>
                        </Box>
                        <Box sx={{ px: 5, py: 4 }}>

                            <Typography variant="h6">Ce que nous allons vous offrir dans ce pack</Typography>
                            <List sx={{
                                listStyleType: 'disc',
                                pl: 2,
                                '& .MuiListItem-root': {
                                    display: 'list-item',
                                },
                            }}>
                                <ListItem sx={{ pb: 0 }}>Validation automatique de votre projet</ListItem>
                                <ListItem sx={{ pb: 0 }}>Accés à toute les publications </ListItem>
                                <ListItem sx={{ pb: 0 }}>Suivi personnel avec des experts du domaine</ListItem>
                                <ListItem sx={{ pb: 0 }}>Validation automatique de votre projet</ListItem>
                                <ListItem sx={{ pb: 0 }}>Validation automatique de votre projet</ListItem>
                                <ListItem >Validation automatique de votre projet</ListItem>
                            </List>
                            <Typography sx={{ fontWeight: "bold" }} component='body2' variant="h4">131,25 USD</Typography>
                            <Typography component='body2' variant="body1">avec 23% de réduction</Typography>
                        </Box>
                    </Grid>



                </Grid>
            </Container>
        </Container >
    )
}

export default Plans