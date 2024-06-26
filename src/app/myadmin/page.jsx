'use client'
import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import baseApi from '../utils/functions';
import { redirect, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';
const Login = () => {

    const router = useRouter();
    const [loader, setloader] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setemail] = useState();
    const [pass, setpass] = useState();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
        console.log(email, pass);

    };
    useEffect(() => {

        if (Cookies.get('adminSaved')) {
            router.push('/admin/dashboard');
        }
    }, []);
    function handleSubmit() {
        setloader(true);
        event.preventDefault();
        console.log(email, pass);
        baseApi.post('/admin/auth', { 'email': email, 'password': pass }).then((response) => {
            const data = response.data;
            if (data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Login Succesfully",
                    // text: "Wrong Email and Password",
                    timer: 1500
                    // footer: '<a href="#">Why do I have this issue?</a>'
                });
                Cookies.set('adminSaved', 'true');
                Cookies.set('adminEmail', email);
                router.push('/admin/dashboard');

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Wrong Email and Password",
                    timer: 1500
                    // footer: '<a href="#">Why do I have this issue?</a>'
                });
            }
            setloader(false);
            console.log(data);
        })

    }
    return (
        <Box>
            <Grid height={'100vh'} container justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={6}>
                    <Paper sx={{ padding: '20px' }}>
                        <Typography variant='h3' textAlign={'center'} color={''}>
                            Login
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                required
                                onChange={(event) => { setemail(event.target.value) }}
                                id="outlined-required"
                                label="User name"
                                sx={{ marginY: '20px' }}
                            />

                            <FormControl fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    fullWidth
                                    required
                                    onChange={(event) => { setpass(event.target.value) }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <Box variant='div' sx={{ marginY: '20px', marginX: 'auto', textAlign: 'center' }}>
                                <Button variant="contained" type='submit' sx={{ margin: 'auto', }}>{loader ? <CircularProgress color="secondary" /> : "Submit"}</Button>
                            </Box>
                        </form>

                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login