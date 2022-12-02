import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box, Button, Modal, Stack, Typography } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: "#1F003C",
    border: '2px solid #000',
    boxShadow: 24,
    p: 6,
    textAlign: 'center',
    borderRadius: 10
};


const WelcomeModal = () => {
    return (
        <Modal
            open={true}
        // onClose={handleClose}
        >
            <Box sx={style}>
                <CheckCircleOutlineIcon sx={{ height: 100, width: 100, color: 'white' }} />
                <Typography gutterBottom variant="h3" sx={{ fontWeight: 'bold', color: 'white' }} >Welcome!</Typography>
                <Typography gutterBottom sx={{ my: 2, color: 'white' }}>Nous sommes heureux de vous
                    avoir parmi nous</Typography>

                <Button color="secondary" sx={{ color: 'white', p: 2 }} variant='contained'>Continuer</Button>
            </Box>
        </Modal >
    )
}

export default WelcomeModal