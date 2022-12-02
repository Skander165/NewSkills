import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <>
      <Typography gutterBottom variant="h4" color="secondary" textAlign="center">Services</Typography>
      <Grid container spacing={12} justifyContent="center">
        <Grid item xs={12} sm={10} md={6} lg={5} xl={4} >
          <Paper sx={{ height: "100%", gap: 3, py: 6, px: 6, display: 'flex', flexDirection: 'column', alignItems: "center" }} >
            <Image src="/assets/reseau.png" alt="Réseau mondial" width={108} height={150} objectFit="contain" />
            <Typography textAlign="center">Accéder à un réseau d’hommes d’affaires et porteurs de projets</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10} md={6} lg={5} xl={4} >
          <Paper sx={{ height: "100%", gap: 3, py: 6, px: 6, display: 'flex', flexDirection: 'column', alignItems: "center" }} >
            <Image src="/assets/board.png" alt="Créer votre projet" width={108} height={150} objectFit="contain" />
            <Typography textAlign="center">Créer votre projet</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10} md={6} lg={5} xl={4} >
          <Paper sx={{ height: "100%", gap: 3, py: 6, px: 6, display: 'flex', flexDirection: 'column', alignItems: "center" }} >
            <Image src="/assets/trust.png" alt="gagner de l'assistance" width={108} height={150} objectFit="contain" />
            <Typography textAlign="center">gagner de l’assistance dans votre projet</Typography>
          </Paper>
        </Grid>


      </Grid>
    </>
  )
}

export default Services