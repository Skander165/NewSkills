import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SubdirectoryArrowRightOutlinedIcon from '@mui/icons-material/SubdirectoryArrowRightOutlined';
import React from 'react'
import { Box, Button, Divider } from '@mui/material';

const CommentCard = () => {
    return (
        <Card sx={{ marginBottom: 1 }}>
            <CardHeader
                disableTypography
                avatar={
                    <Avatar src="/assets/avatar.png">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={<Typography variant='body1'>@Kizaru</Typography>}
                subheader={<Typography variant='body2' color="grey">12 November 2020 19:35</Typography>}
            />
            <CardContent sx={{ paddingTop: 0 }}>
                <Typography variant="body1" >
                    Mi ac id faucibus laoreet. Nulla quis in interdum imperdiet. Lacus mollis massa netus.
                </Typography>
                <Divider />
            </CardContent>

            <CardActions disableSpacing sx={{ gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton aria-label="like" >
                        <ThumbUpOutlinedIcon />
                    </IconButton>
                    <Typography>1</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton aria-label="dislike">
                        <ThumbDownOutlinedIcon />
                    </IconButton>
                    <Typography>0</Typography>
                </Box>
                <Box sx={{ marginLeft: "auto" }}>
                    <Button startIcon={<SubdirectoryArrowRightOutlinedIcon />}>Reply</Button>
                </Box>

            </CardActions >
        </Card >
    )
}

export default CommentCard