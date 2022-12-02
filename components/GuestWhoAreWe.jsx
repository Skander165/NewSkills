import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

const GuestWhoAreWe = () => {
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    return (
        // <Container fixed >

        <Grid container direction={largeScreen ? "row" : "column-reverse"} sx={{ my: 10 }}>
            <Grid item sx={{ flex: 1 }} >
                <Typography gutterBottom sx={{ color: "primary.main", textTransform: "uppercase" }} variant="body1">WHAT'S NEXT?</Typography>
                <Typography gutterBottom variant="h4">Who Are We?</Typography>
                <Typography variant="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis provident molestiae aliquid in quisquam numquam magnam vel explicabo reprehenderit doloremque labore perspiciatis libero veniam, quos odit, eaque recusandae at tempora cumque voluptatem iure earum nihil! Dicta, illo repellat? Ipsum optio tenetur neque tempore? Repellendus et labore aut aspernatur ipsam provident, earum at, unde dolore eveniet eaque consectetur minus laborum debitis incidunt consequatur quisquam! Totam, excepturi. Voluptatibus voluptas quam placeat velit quae libero unde? Pariatur eius quos alias non. Ea vel iure sapiente, possimus obcaecati non atque veniam sit inventore, minus animi voluptates cumque deleniti quisquam perspiciatis architecto explicabo eligendi.</Typography>
            </Grid>
            <Grid sx={{ position: "relative", flex: 1 }} item alt="New Skills">
                <Image src="/assets/guestNewSkills.png" layout='fill' objectFit='contain' />
            </Grid>
        </Grid>
        // {/* </Container> */}
    )
}

export default GuestWhoAreWe