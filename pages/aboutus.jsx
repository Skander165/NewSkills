import { Container } from '@mui/material'
import React from 'react'
import NewsAndAnalysis from '../components/NewsAndAnalysis'
import WhoAreWe from '../components/WhoAreWe'

const aboutus = () => {
    return (
        <Container>
            <WhoAreWe />
            <NewsAndAnalysis />
        </Container>
    )
}

export default aboutus