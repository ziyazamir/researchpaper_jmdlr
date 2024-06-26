'use client'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import baseApi from '@/app/utils/functions';
import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const Publications = ({ params }) => {
    const [paper, setpaper] = useState([]);
    const [myfile, setmyfile] = useState();
    useEffect(() => {

        baseApi.get('/paper/' + params.paper_id).then((response) => {
            console.log(response.data.data);
            let paper = response.data.data;
            console.log(paper[0]);
            setpaper(paper[0]);
            setmyfile('https://nitisara.in/uploads/' + paper[0].file);

        })
    }, []);

    return (
        <>

            <Box paddingX={{ xs: '20px', md: '100px' }} paddingTop={'20px'} container sx={{ backgroundColor: '#eee' }}>

                <Paper sx={{ padding: '20px', marginBottom: '10px' }}>
                    <Typography color={'black'} fontSize={{ xs: '30px', md: '40px', }} fontFamily={'Cambria'} variant='h3'>
                        {paper.title}
                    </Typography>
                    <Typography color={'grey'} fontSize={{ xs: '15px', md: '20px', }} fontFamily={'Cambria'} variant='h3'>
                        Author: {paper.author}
                    </Typography>
                    <Typography color={'grey'} fontSize={{ xs: '15px', md: '20px', }} fontFamily={'Cambria'} variant='h3'>
                        DOI: {paper.doi}
                    </Typography>
                </Paper>
                {/* {issuesByVolume.map((paper, index) => { */}
                <Paper sx={{ padding: '20px', marginBottom: '10px' }}>
                    <Grid container rowGap={1} columnSpacing={'10'}>
                        <Grid sx={{ marginBottom: '10px', }} height={'100vh'} item xs={12}>


                            <Typography paddingY={'10px'} fontSize={{ xs: '14px', md: '20px' }} variant='h4' >
                                Abstract
                            </Typography>
                            <Typography fontSize={{ xs: '14px', md: '20px' }} variant='h4' >
                                {paper.abstact}
                            </Typography>
                            <a href={myfile} download="true" style={{ margin: '10px 0', display: 'block' }} target='_blank'>
                                <Button variant='outlined' marginY='20px'>
                                    Download Paper
                                </Button>
                            </a>
                            <iframe width={'100%'} height={'90%'} src={myfile}></iframe>
                            {/* <Document file={myfile}>
                                <Page pageIndex={0} />
                            </Document> */}
                        </Grid>





                    </Grid>
                </Paper>
                {/* })} */}



            </Box ></>
    )
}

export default Publications