import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
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

export default function IssueModal({ setrows, rows, volumes }) {
    console.log(rows);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setvalue] = useState("");
    function handleInputChange(event) {
        setvalue(event.target.value)
    }
    // useMemo(()=> handleInputChange(event) ,)
    const [volumeId, setvolumeId] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        console.log(volumeId);
        baseApi.post('/issue', { "title": value, "volume_id": volumeId }).then((response) => {
            let data = response.data.data[0];
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
            <Button sx={{ width: '100%', marginBottom: '10px' }} variant='outlined' onClick={handleOpen}>Add new Issue</Button>
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
                            <FormControl fullWidth sx={{ marginY: '20px' }}>
                                <InputLabel id="demo-simple-select-label">Select Volume</InputLabel>
                                <Select
                                    required
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Select Volume"
                                    onChange={(event) => setvolumeId(event.target.value)}
                                >
                                    {
                                        volumes.map((vol) => {
                                            return <MenuItem key={vol.id} value={vol.id}>{vol.title}</MenuItem>
                                        })
                                    }

                                </Select>
                            </FormControl>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Issue Title"
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
