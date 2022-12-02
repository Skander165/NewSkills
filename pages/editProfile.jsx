import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Chip, Container, Stack, TextField, Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useState } from 'react';

const EditProfile = () => {
  const [disabled, setDisabled] = useState(true);


  const handleDelete = () => {
    console.log("delete")
  }
  return (
    <Container sx={{ p: 5 }}>
      <Typography>Paramètres du compte</Typography>
      <Button startIcon={<KeyboardBackspaceIcon />}>
        Retour
      </Button>
      <Card sx={{ p: 4 }}>
        <CardHeader
          disableTypography
          avatar={
            <Avatar src="/assets/avatar.png" sx={{ width: 102, height: 102 }}>R</Avatar>
          }

          title={<Typography variant="h6">Mohamed Safraoui</Typography>}
          subheader={<>
            <Button variant='contained' color="secondary" onClick={() => setDisabled(!disabled)}>Modifier</Button>
            <Button variant='contained' sx={{ color: 'white' }}>Supprimer</Button>
          </>}
        />

        <CardContent>
          <Typography gutterBottom variant="body1">Informations personnelles</Typography>
          <Stack sx={{ mb: 5 }} direction="row" spacing={3}>
            <TextField sx={{ width: "100%" }} label="Nom d'utilisateur" disabled={disabled} variant="outlined" />
            <TextField sx={{ width: "100%" }} label="Nom et prénom" disabled={disabled} variant="outlined" />
            <TextField sx={{ width: "100%" }} label="Sexe" disabled={disabled} variant="outlined" />
          </Stack>
          <Typography gutterBottom variant='body2'>Centres d’intêret:</Typography>
          <Stack sx={{ mb: 5 }} direction="row" spacing={3}>
            <Chip
              icon={<ApartmentIcon />}
              label="Bourse"
              // onClick={handleClick}
              onDelete={handleDelete}
            />
            <Chip
              icon={<ApartmentIcon />}
              label="Bourse"
              // onClick={handleClick}
              onDelete={handleDelete}
            />
            <Chip
              icon={<ApartmentIcon />}
              label="Bourse"
              // onClick={handleClick}
              onDelete={handleDelete}
            />
          </Stack>
          <Typography gutterBottom variant="body1">Informations du compte</Typography>
          <Stack sx={{ mb: 5 }} direction="row" spacing={3}>
            <TextField sx={{ width: "100%" }} label="Email" disabled={disabled} variant="outlined" />
            <TextField sx={{ width: "100%" }} label="Mot de passe" disabled={disabled} variant="outlined" />
          </Stack>
        </CardContent>
        <CardActions>
          <Button color='primary' variant='contained' sx={{ color: 'white' }}>Enregistrer</Button>
          <Button variant='contained' sx={{ color: 'white' }}>Annuler</Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default EditProfile