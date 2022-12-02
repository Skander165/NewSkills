import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallMadeIcon from '@mui/icons-material/CallMade';
const HeaderOptions = () => {

    return (
        <Grid container alignItems="center" justifyContent='center' columnSpacing={2} sx={{ mt: 2 }}>
            <Grid item p={2} sx={{ display: 'flex', gap: { lg: 10, md: 8 }, boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)", borderRadius: 3, width: "auto" }}>
                <Typography>Bourse</Typography>
                <Typography>Economie</Typography>
                <Typography>Life Style</Typography>
                <Typography>OPCVM</Typography>
                <Typography>Start Up</Typography>
                <Typography>lorem</Typography>
                <Typography>lorem</Typography>
            </Grid>
            <Grid item p={2} >
                <Button sx={{ marginRight: 1, backgroundColor: 'secondary.light', color: 'white' }} startIcon={<AccessTimeIcon />} variant='contained' height="100%">New</Button>
                <Button sx={{ color: 'white' }} startIcon={<CallMadeIcon />} variant='contained' height="100%">Trending</Button>
            </Grid>
        </Grid>


    )
}

export default HeaderOptions