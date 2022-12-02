import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import BlogCard from './BlogCard'

const Main = () => {
    return (
        <Container maxWidth="md" sx={{ p: 2 }} >
            <Typography sx={{ textAlign: 'center' }} gutterBottom variant='h6'>Find something interesting to discuss</Typography>
            <Stack spacing={3}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </Stack>
        </Container>
    )
}

export default Main