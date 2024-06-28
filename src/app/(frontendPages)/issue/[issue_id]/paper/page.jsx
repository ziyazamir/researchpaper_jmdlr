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

const Publications = ({ params }) => {
    const [issuesByVolume, setissuesByVolume] = useState([]);
    useEffect(() => {

        baseApi.get('/paper/by-issue/' + params.issue_id).then((response) => {
            console.log(response.data.data);
            let issues = response.data.data;
            console.log(issues);
            setissuesByVolume(issues);

        })
    }, []);
    return (
        <>

            <Box paddingX={{ xs: '20px', md: '100px' }} container sx={{ backgroundColor: '#eee' }}>

                <Typography color={'black'} textAlign={'center'} fontSize={{ xs: '30px', md: '40px' }} variant='h3'>
                    Archives
                </Typography>
                {issuesByVolume.map((paper, index) => {
                    return <Paper key={index} sx={{ padding: '20px', marginBottom: '10px' }}>
                        <Grid container rowGap={1} columnSpacing={'10'}>
                            <Grid sx={{ marginBottom: '10px', }} item xs={12}>

                                <Link href={'/paper/' + paper.slug}>
                                    <Typography sx={{ paddingLeft: '20px' }} fontSize={{ xs: '14px', md: '20px' }} variant='h4' >
                                        {index + 1}.{paper.title}
                                    </Typography>
                                    <Typography sx={{ paddingLeft: '20px', marginY: '10px' }} color={'grey'} fontSize={{ xs: '14px', }} variant='h4' >
                                        <span style={{ fontWeight: 'bold' }}>DOI:</span> {paper.doi}
                                    </Typography>
                                    <Typography sx={{ paddingLeft: '20px' }} color={'grey'} fontSize={{ xs: '14px', }} variant='h4' >
                                        <span style={{ fontWeight: 'bold' }}>Author:</span> {paper.author}
                                    </Typography>
                                </Link>

                            </Grid>





                        </Grid>
                    </Paper>
                })}



            </Box ></>
    )
}

export default Publications