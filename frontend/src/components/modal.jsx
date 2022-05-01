import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>More Info</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Name of property
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        About the property.
                        Lorem ipsum dolor sit amet. Vel eius rerum non earum dignissimos et iure voluptatum ut laboriosam dolorum vel dolor sunt id mollitia omnis 33 soluta sequi. Ad expedita ipsum aut galisum vero qui odio obcaecati et dicta ipsa nam quibusdam consequuntur sed perferendis voluptatem sed aspernatur tempore. Non sunt consectetur aut autem sed dolorem animi aut pariatur accusamus qui molestiae cupiditate ea officiis totam eos sint quia.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}