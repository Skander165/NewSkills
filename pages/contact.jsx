import { Button, Container, Grid, List, ListItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const contact = () => {
  return (
    <Container fixed sx={{ p: 5 }} >
      <Grid container direction="row" sx={{ borderRadius: 3, overflow: 'hidden' }} >
        <Grid item xs={6} sx={{ p: 5, backgroundColor: "primary.main" }}>
          <Typography color='white' gutterBottom variant="h3">Contactez-nous</Typography>
          <Typography sx={{ mb: 5 }} color='white' gutterBottom variant="body1">Remplissez le formulaire, notre équipe vous répondra dans les 24 heures.</Typography>
          <Typography color='white' gutterBottom variant="h3">Contact info:</Typography>
          <List sx={{
            listStyleType: 'disc',
            pl: 2,
            '& .MuiListItem-root': {
              display: 'list-item',
            },
          }}>
            <ListItem sx={{ color: 'white' }} >Numéro de tel : (+216) 97 182 901</ListItem>
            <ListItem sx={{ color: 'white' }} >Email: Hello@newskills.com</ListItem>
            <ListItem sx={{ color: 'white' }} >Fax : 73 546 700</ListItem>

          </List>
        </Grid>
        <Grid item xs={6} direction="column" sx={{ p: 5, backgroundColor: "#F9F8FA" }}>
          <Stack spacing={4} >
            <TextField label="Nom et prénom" variant="outlined" />
            <TextField label="Adresse Email" variant="outlined" />
            <TextField multiline rows={6} label="Votre message" variant="outlined" />
            <Button color="secondary" variant='contained' sx={{ width: "fit-content", py: 2 }}>Envoyer un message</Button>
          </Stack>



        </Grid>
      </Grid >
    </Container >
  )
}

export default contact