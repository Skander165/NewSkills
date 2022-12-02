import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import LatestCard from './LatestCard'

const Latest = () => {
    return (
        // <Container fixed >
        <>
            <Box sx={{ width: "50%", textAlign: "center", margin: "0 auto" }}>
                <Typography gutterBottom sx={{ color: "primary.main", textTransform: "uppercase" }} variant="body1">Nouveautés</Typography>
                <Typography gutterBottom sx={{ fontWeight: "bold" }} variant="h4">Découvrir Nos Derniers Articles</Typography>
                <Typography gutterBottom sx={{ color: "#969696" }} variant="body1">Restez à jour pour être toujours informés des nouveautés selon vos centres d’intérêt</Typography>
            </Box>
            <LatestCard />
        </>
        // {/* </Container> */ }
    )
}

export default Latest