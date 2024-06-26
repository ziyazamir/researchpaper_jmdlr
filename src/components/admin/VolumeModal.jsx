import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Paper, TextField } from '@mui/material';
// import { saveVolume } from '@/app/utils/functions';
import { redirect } from 'next/navigation';
import baseApi from '@/app/utils/functions';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function VolumeModal({ setrows, rows }) {
    console.log(rows);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setvalue] = useState("");
    function handleInputChange(event) {
        setvalue(event.target.value)
    }
    // useMemo(()=> handleInputChange(event) ,)
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        baseApi.post('/volume', { "title": value }).then((response) => {
            let data = response.data.data;
            console.log(data);
            // console.log(rows);
            setrows(rows => [data, ...rows]);
            // setrows(rows);
            console.log(rows);
            setOpen(!open);
        })
        // const resp = saveVolume(value);

    }
    return (
        <>
            <Button sx={{ width: '100%', marginBottom: '10px' }} onClick={handleOpen} variant='outlined'>Add new Volume</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper>
                    <Box borderRadius={3} sx={style} color={'black'}>
                        <Typography variant='h5' textAlign={'center'}>Add New Volume</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Volume Title"
                                sx={{ marginY: '20px' }}
                                onChange={handleInputChange}
                            />
                            <Box variant='div' sx={{ marginY: '20px', marginX: 'auto', textAlign: 'center' }}>
                                <Button type='submit' variant="contained" sx={{ margin: 'auto', }}>Submit</Button>
                            </Box>
                        </form>
                    </Box>
                </Paper>
            </Modal>
        </>
    );
}
