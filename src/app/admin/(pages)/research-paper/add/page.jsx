'use client'
import baseApi, { BASE_API } from '@/app/utils/functions';
import { FileUploader } from "react-drag-drop-files";
import { Height } from '@mui/icons-material';
import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, TextareaAutosize as BaseTextareaAutosize, Typography, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
const fileTypes = ["PDF"];
const Page = () => {
    const [loader, setloader] = useState(false);
    const router = useRouter();
    const [title, settitle] = useState("");
    const [author, setauthor] = useState("");
    const [DOI, setDOI] = useState("");
    const [volumeId, setvolumeId] = useState("");
    const [abstract, setabstract] = useState("");
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        box-sizing: border-box;
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color:black;
        background: #fff;
      `,
    );
    const [issueId, setissueId] = useState();
    const [volume, setvolume] = useState([]);
    const [issue, setissue] = useState([]);
    const [Volissue, setVolissue] = useState([]);
    useEffect(() => {
        // router.push('/admin/research-paper');
        baseApi.get('/volume').then((response) => {
            let data = response.data.data;
            setvolume(data);
            console.log(data);
        })
        baseApi.get('/issue').then((response) => {
            let data = response.data.data;
            setissue(data);
            console.log(data);
        })
    }, []);
    function convertToSlug(Text) {

        return Text
            .toString()
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");

    }
    function handleSubmit(event) {
        event.preventDefault();
        setloader(true);
        let data = new FormData();
        data.append('file', file);
        data.append('filename', convertToSlug(title));
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://nitisara.in/api/jmdlr/upload.php',
            // headers: {
            //     ...data.getHeaders()
            // },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data.filename);
                let fileName = response.data.filename;
                let formData = new FormData;
                formData.append('title', title);
                formData.append('slug', convertToSlug(title));
                formData.append('author', author);
                formData.append('doi', DOI);
                formData.append('volume', volumeId);
                formData.append('issue', issueId);
                formData.append('abs', abstract);
                formData.append('filename', fileName);
                // baseApi.post('/paper', { formData }).then((response) => {
                //     console.log(response.data);
                // })
                axios({
                    method: "post",
                    url: BASE_API + '/paper',
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                })
                    .then(function (response) {
                        //handle success
                        console.log(response);
                        Swal.fire({
                            title: "Paper Added Succesfully!",
                            text: "",
                            icon: "success"
                        });
                        setloader(false);
                        router.push('/admin/research-paper');
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });

            })
            .catch((error) => {
                console.log(error);
            });

        // baseApi.post()
    }
    return (
        <Grid container columnSpacing={2} justifyContent={'center'} rowSpacing={5}>

            <Grid item xs={6}>
                <Paper sx={{ padding: '20px' }}>
                    <Typography variant='h5'>
                        Add New Paper
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={10}>
                <Paper sx={{ padding: '20px' }}>
                    <form onSubmit={handleSubmit}>
                        <TextField required onChange={(event) => settitle(event.target.value)} className='' sx={{ marginBottom: '20px' }} fullWidth id="outlined-basic" label="Title" variant="outlined" />
                        <TextField required onChange={(event) => setauthor(event.target.value)} className='' sx={{ marginBottom: '20px' }} fullWidth id="outlined-basic" label="Author" variant="outlined" />
                        <TextField required onChange={(event) => setDOI(event.target.value)} className='' sx={{ marginBottom: '20px' }} fullWidth id="outlined-basic" label="DOI" variant="outlined" />


                        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                            <InputLabel id="demo-simple-select-volume">Select Volume</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-volume"
                                id="demo-simple-volume"
                                // value={age}
                                label="Select Volume"
                                onChange={(event) => {
                                    let volId = event.target.value;
                                    setvolumeId(volId);
                                    console.log(volId);
                                    console.log(issue);
                                    let newIssue = issue.filter(item => item.volumeId === volId);
                                    console.log(newIssue);
                                    setVolissue(newIssue);
                                }}
                            >
                                {
                                    volume.map((vol) => {
                                        return <MenuItem key={vol.id} value={vol.id}>{vol.title}</MenuItem>
                                    })
                                }

                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                            <InputLabel id="demo-simple-select-label">Select Issue</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Select Volume"
                                onChange={(event) => setissueId(event.target.value)}
                            >
                                {
                                    Volissue.map((vol) => {
                                        return <MenuItem key={vol.id} value={vol.id}>{vol.issueTitle}</MenuItem>
                                    })
                                }

                            </Select>
                        </FormControl>
                        {/* <TextField required onChange={(event) => { console.log(event.target.value); setabstract(event.target.value) }} className='' sx={{ marginBottom: '20px', height: '300px !importnat' }} fullWidth id="outlined-textara" label="Abstract" variant="outlined" /> */}
                        <Textarea maxRows={12} minRows={10}
                            sx={{ marginBottom: "20px", }}
                            required
                            // ={abstract}
                            defaultValue={abstract}
                            aria-label="Abstract"
                            onBlur={(event) => { console.log(event.target.value); setabstract(event.target.value) }}
                            placeholder="Abstract" />
                        <br />
                        <FileUploader required={true} label='Upload the Pdf File' dropMessageStyle={{ backgroundColor: 'red', width: '100%', marginBottom: '20px' }} handleChange={handleChange} name="file" types={fileTypes} />
                        <Button variant='contained' sx={{ marginTop: '20px', marginX: 'auto', display: 'block' }} type='submit'>{loader ? <CircularProgress color="secondary" /> : "Submit"} </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Page