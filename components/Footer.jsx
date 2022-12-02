import { AppBar, Box, Container, Grid, IconButton, Stack, styled, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    const SocialMediaIcon = styled(IconButton)(({ theme }) => ({
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: "white"
        },
    }))
    return (
        <>
            <Container fixed sx={{ p: 2 }}>
                <Grid container justifyContent='center' spacing={4} sx={{ alignItems: { xs: "center", md: 'flex-start' }, flexDirection: { xs: 'column', sm: 'row', md: "row", lg: "row" } }} >
                    <Grid item xs={12} sm={4} md={3} lg={3} sx={{ textAlign: 'center' }} >
                        <Box sx={{ width: 108, height: 57, position: 'relative', margin: { xs: "0 auto" } }}>
                            <Image src="/assets/footerLogo.png" layout='fill' />
                        </Box>
                        <Typography variant="body2" sx={{ color: "#969696", mb: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quisquam!</Typography>
                        <Box>
                            <SocialMediaIcon>
                                <FacebookOutlinedIcon />
                            </SocialMediaIcon>
                            <SocialMediaIcon>
                                <InstagramIcon />
                            </SocialMediaIcon>
                            <SocialMediaIcon>
                                <TwitterIcon />
                            </SocialMediaIcon>
                            <SocialMediaIcon>
                                <YouTubeIcon />
                            </SocialMediaIcon>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9} lg={9} sx={{ textAlign: 'center' }} >
                        <Typography sx={{ mb: { xs: 5 } }} gutterBottom variant="body1">Lien utiles</Typography>
                        <Stack sx={{ gap: { md: 10, sm: 3, xs: 5 }, flexDirection: { xs: 'column', sm: 'row' }, flexWrap: "wrap" }}>
                            <Typography variant="body1" color="text.light">Forum</Typography>
                            <Typography variant="body1" color="text.light">A propos</Typography>
                            <Typography variant="body1" color="text.light">Contactez nous</Typography>
                            <Typography variant="body1" color="text.light">Plans</Typography>
                            <Typography variant="body1" color="text.light">Soumettre votre projet</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Box p={2} textAlign="center" sx={{ borderTop: "1px solid lightgrey" }}>
                <Typography color="text.light">© 2021 Onix All rights reserved.</Typography>
            </Box>
        </>
    )
}

export default Footer