import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Paper, TextField } from '@mui/material';
// import { saveVolume } from '@/app/utils/functions';
import { redirect } from 'next/navigation';
import baseApi from '@/app/utils/functions';
import Cookies from 'js-cookie';
import PasswordIcon from '@mui/icons-material/Password';
import Swal from 'sweetalert2';
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

export default function ChangePass() {

    const [myopen, setMyopen] = useState(false);
    const handleMyOpen = () => setMyopen(true);
    const handleMyClose = () => { console.log('closing '); setMyopen(false) };
    const [email, setemail] = useState("");
    const [oldpass, setoldpass] = useState("");
    const [newPass, setnewPass] = useState("");

    // useMemo(()=> handleInputChange(event) ,)
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(value);
        baseApi.put('/admin/auth', { "email": Cookies.get('adminEmail'), "oldPassword": oldpass, "newPassword": newPass }).then((response) => {
            let data = response.data;
            console.log(data);
            if (data.success) {
                setMyopen(false);
                Swal.fire({
                    icon: "success",
                    title: "Password Changed Succesfully",
                    // text: "Wrong Email and Password",
                    timer: 1500
                    // footer: '<a href="#">Why do I have this issue?</a>'
                });
            }
            // console.log(rows);

        })
        // const resp = saveVolume(value);

    }
    return (
        <>
            <Button sx={{ width: '100%', }} onClick={handleMyOpen} > Change Password</Button>
            <Modal
                open={myopen}
                onClose={handleMyClose}
                id="changepass"
                index={2}
            // onClose={(_, reason) => reason === 'backdropClick' && setMyopen(false)}
            >
                <Paper>
                    <Box borderRadius={3} sx={style} color={'black'}>
                        <Typography variant='h5' textAlign={'center'}>Change Password</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Old Password"
                                sx={{ marginY: '20px' }}
                                onChange={(event) => { setoldpass(event.target.value) }}
                            />
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="New Password"
                                sx={{ marginY: '20px' }}
                                onChange={(event) => { setnewPass(event.target.value) }}
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
