import { Box, Button, Chip, Modal, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image';
import ApartmentIcon from '@mui/icons-material/Apartment';
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 6,
    textAlign: 'center'
};


const AboutYouModal = () => {
    return (
        <Modal
            open={true}
        // onClose={handleClose}
        >
            <Box sx={style}>
                <Image src="/assets/frame.png" height={50} width={50} objectFit="contain" />
                <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} color="secondary.main">À propos de vous</Typography>
                <Typography gutterBottom id="modal-modal-description" sx={{ mt: 2 }}>parlez-nous de vous pour commencer à construire
                    votre acceuil</Typography>
                <Stack sx={{ mb: 5 }} direction="column" spacing={3}>
                    <TextField sx={{ width: "100%" }} label="Nom et prénom" variant="outlined" />
                    <TextField sx={{ width: "100%" }} label="Sexe" variant="outlined" />
                    <TextField sx={{ width: "100%" }} label="Âge" variant="outlined" />
                </Stack>
                <Button color="primary" sx={{ color: 'white', p: 2 }} variant='contained'>Continuer</Button>
            </Box>
        </Modal >
    )
}

export default AboutYouModal