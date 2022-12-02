import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const GuestMain = () => {
    return (
        <Container maxWidth="xl" sx={{
            background: 'linear-gradient(180deg, #15B0F8 40%, #FFFFFF 100%)', height: "100%", textAlign: "center", py: 10
        }}>
            <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 8 }} >
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "white" }}>Rejoindre la communauté de new skills
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales aliquet turpis quis consequat. Donec vulputate, urna et placerat lacinia, libero</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
                    <Button sx={{
                        backgroundColor: "secondary.main", color: "white", borderColor: "white", '&:hover': {
                            backgroundColor: 'secondary.main',
                            boxShadow: 'none',
                        }, px: 2, py: 1, fontWeight: 400
                    }}>Abonnez vous</Button>

                    <Button sx={{ color: 'white', border: "1px solid white", px: 2, py: 1, fontWeight: 400 }}>plus d'infos</Button>
                </Box>

            </Container>
            <Container maxWidth='md' sx={{ mb: 10 }}>
                <Card >
                    <CardMedia
                        component="img"
                        image="/assets/guestMain.png"
                    />
                </Card>
            </Container>
        </Container >
    )
}

export default GuestMain