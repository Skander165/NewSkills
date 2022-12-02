import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const LatestCard = () => {
    return (
        <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card >
                    <CardMedia
                        component="img"
                        image="/assets/latestCard1.png"
                    />
                    <CardContent>
                        <Typography variant="body2">BNA Bank, partenaire officiel du North Africa Summit 2022</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5, mt: 10, mb: 2 }}>
                            <Typography variant="body2" component="body1">6 hours ago by </Typography>
                            <Typography variant="body2" component="body1" color="secondary">the_big_mothergoose</Typography>
                        </Box>
                        <Typography variant="body1" color="primary" sx={{ textTransform: "uppercase" }}>économie</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card >
                    <CardMedia
                        component="img"
                        image="/assets/latestCard2.png"
                    />
                    <CardContent>
                        <Typography variant="body2">Troisième tranche de l'Emprunt National 2022 : L'Etat envisage de mobiliser 350 millions de dinars</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5, mt: 10, mb: 2 }}>
                            <Typography variant="body2" component="body1">8 hours ago by </Typography>
                            <Typography variant="body2" component="body1" color="secondary">IHaeTypos</Typography>
                        </Box>
                        <Typography variant="body1" color="primary" sx={{ textTransform: "uppercase" }}>Lifestyle</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card >
                    <CardMedia
                        component="img"
                        image="/assets/latestCard3.png"
                    />
                    <CardContent>
                        <Typography variant="body2">L'euro repasse sous les 3,200 dinars pour la première fois depuis juin 2020</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5, mt: 10, mb: 2 }}>
                            <Typography variant="body2" component="body1">45 minutes ago by </Typography>
                            <Typography variant="body2" component="body1" color="secondary">bwa_ahki</Typography>
                        </Box>
                        <Typography variant="body1" color="primary" sx={{ textTransform: "uppercase" }}>Lifestyle</Typography>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    )
}

export default LatestCard