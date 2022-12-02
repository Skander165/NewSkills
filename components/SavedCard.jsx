import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import data from "../utility/data"


const SavedCard = () => {
    return (
        <Grid container spacing={6} justifyContent="left">
            {data.saved.map((card) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                    <Card elevation={0}>
                        <CardMedia
                            component="img"
                            image={card.image}
                        />
                        <CardContent>
                            <Typography variant="body2">{card.text}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default SavedCard