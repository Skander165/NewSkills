import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { CardHeader, Grid } from '@mui/material';

import IconButton from '@mui/material/IconButton';

const BlogCard = () => {

    return (
        <Card sx={{ display: 'flex', flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' } }}>
            <CardMedia
                component="img"
                sx={{ flex: 1, height: "auto", }}
                image="/assets/blog1.png"
                alt="Live from space album cover"
            />
            <Grid container sx={{ flex: 2 }} direction="column">
                <Grid item sx={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
                    <CardHeader
                        disableTypography
                        title={
                            <Typography variant="h6" >
                                Intelligence Artificielle : Le Deep Learning INDABA 2022 marque son grand retour en Tunisie
                            </Typography>
                        }
                    />
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <BookmarkBorderIcon />
                    </IconButton>

                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant="body1">6 hours ago <Typography color="secondary.main" component="span">by Jon Doe</Typography></Typography>
                        <Typography color='primary.main' variant="body1" textTransform='capitalize'>économie</Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                        {/* <IconButton color="primary" aria-label="upload picture" component="label">
                            <BookmarkBorderIcon />
                        </IconButton> */}
                        <Typography>13k</Typography>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <ChatBubbleOutlineIcon />
                            <Typography>165</Typography>

                        </IconButton>
                    </Box>
                </Grid>
            </Grid>


        </Card >
    )
}

export default BlogCard