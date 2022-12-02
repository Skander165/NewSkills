import { Avatar, Box, Button, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import SavedCard from '../components/SavedCard'

const Profile = () => {
  return (
    <Container fixed>
      <Box sx={{ padding: 5, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2 }}>
        <Avatar src="/assets/avatar.png" sx={{ width: 220, height: 220 }}></Avatar>
        <Typography variant="h4">Mohamed Safraoui</Typography>
        <Typography variant="body1">Mohamedsafraoui@gmail.com</Typography>
        <Button variant="contained">Edit Profile</Button>
      </Box>

      <Box>
        <Typography variant="body1" sx={{ width: 'min-content', borderBottom: "1px solid black", cursor: "pointer", fontWeight: "bold" }}>Saved</Typography>
        <Divider />
        <SavedCard />
      </Box>
    </Container>
  )
}

export default Profile