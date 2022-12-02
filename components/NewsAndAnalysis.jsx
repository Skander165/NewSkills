import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const NewsAndAnalysis = () => {
    return (
        <Grid container direction="row" columnSpacing={2}>
            <Grid sx={{ position: "relative" }} item xs={6} alt="New Skills">
                <Image src="/assets/breakingNews.png" layout='fill' objectFit='contain' />
            </Grid>
            <Grid item xs={6} >
                <Typography variant="h4">Who Are We?</Typography>
                <Typography align='center' variant="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis provident molestiae aliquid in quisquam numquam magnam vel explicabo reprehenderit doloremque labore perspiciatis libero veniam, quos odit, eaque recusandae at tempora cumque voluptatem iure earum nihil! Dicta, illo repellat? Ipsum optio tenetur neque tempore? Repellendus et labore aut aspernatur ipsam provident, earum at, unde dolore eveniet eaque consectetur minus laborum debitis incidunt consequatur quisquam! Totam, excepturi. Voluptatibus voluptas quam placeat velit quae libero unde? Pariatur eius quos alias non. Ea vel iure sapiente, possimus obcaecati non atque veniam sit inventore, minus animi voluptates cumque deleniti quisquam perspiciatis architecto explicabo eligendi.</Typography>
            </Grid>
        </Grid>
    )
}

export default NewsAndAnalysis