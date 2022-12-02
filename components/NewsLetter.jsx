import SendIcon from '@mui/icons-material/Send';
import { Button, Container, IconButton, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const NewsLetter = () => {
    return (
        <Container fixed>

            <Box sx={{ width: "70%", textAlign: "center", margin: "0 auto", p: 10 }}>
                <Typography gutterBottom sx={{ fontWeight: "bold" }} variant="h4">S'abonner à notre NewsLetter</Typography>
                <Typography gutterBottom sx={{ color: "#969696", mb: 2 }} variant="body1">Recevez des notifications sur les conseils, les nouvelles publications et les nouveautés, rien que pour vous</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <TextField label="Enter Your Email Address" variant="outlined" sx={{ width: "100%" }} />
                    <Button variant="contained" sx={{ position: 'absolute', right: 5, height: '80%', color: 'white', backgroundColor: 'secondary.main' }}>Abonnez-vous</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default NewsLetter