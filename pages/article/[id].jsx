import { Box, Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CommentCard from '../../components/CommentCard';
const Article = () => {
    return (
        <Container maxWidth="sm">
            <Typography sx={{ textAlign: "center", margin: "10px 0px" }} variant="h6">Le déficit budgétaire de la Tunisie risque d’atteindre 9,3%
                du PIB en 2022</Typography>
            <Card elevation={0}>
                <CardMedia
                    component="img"
                    image="/assets/articleBanner.png"
                />
                <CardContent>
                    <Box>
                        <Typography variant="body2">
                            Avec un taux de croissance prévu de 2,7% en 2022, l’économie tunisienne semble sur une trajectoire de croissance légèrement inférieure à celle qui était précédemment prévue, estime la Banque mondiale (BM), dans un bulletin de conjoncture spécifique à l’économie tunisienne rendu public, mercredi 7 septembre 2022. </Typography>
                        <Typography variant="body2">
                            Ce taux sera réalisé, si le rythme de croissance continue, soit 0,8 points de croissance trimestrielle comme c’était le cas, en moyenne entre le deuxième trimestre 2021 et le deuxième trimestre 2022.
                        </Typography>
                        <Typography variant="body2">
                            Toutefois, si la tendance de reprise pré-guerre se poursuit (1 ,27 point de croissance entre le deuxième trimestre 2021 et le premier trimestre 2022), l’économie pourra réaliser un taux de croissance de 3,1 %.
                        </Typography>
                        <Typography variant="body2">
                            Selon le rapport, ce scenario optimiste est, toutefois, moins probable que le premier dans la mesure où l’effet rebond du second semestre de 2021 risque de s’estomper en raison des conséquences de la guerre russo-ukrainienne.
                        </Typography>
                        <Typography variant="body2">
                            D’après la BM, si la baisse de la demande européenne se confirme et les conséquences des restrictions budgétaires se font sentir à court terme (baisse de la consommation, baisse de l’investissement public), la tendance positive risque de s’inverser et un scenario pessimiste peut conduire à une croissance en 2022 de 2,4%
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                        <TextField sx={{ margin: "20px 0px", width: "100%" }} label="Ecrire un commentaire" variant="outlined" />
                        <Button variant="contained" startIcon={<ChatBubbleOutlineOutlinedIcon />}>Comment</Button >
                    </Box>
                </CardContent>
            </Card>
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
        </Container>
    )
}

export default Article