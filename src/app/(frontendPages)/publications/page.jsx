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
function groupByVolumeTitle(data) {
    const groupedData = {};

    data.forEach(item => {
        const volumeTitle = item.volume_title;
        if (!groupedData[volumeTitle]) {
            groupedData[volumeTitle] = [];
        }
        groupedData[volumeTitle].push({
            issue_id: item.issue_id,
            issue_title: item.issue_title,
            issue_date: item.issue_date
        });
    });

    return Object.keys(groupedData).map(volumeTitle => ({
        volume_title: volumeTitle,
        issues: groupedData[volumeTitle]
    }));
}
const convertIssuesToJson = (data) => {
    return data.map(item => {
        if (item.issues) {
            item.issues = JSON.parse(item.issues);
        } else {
            item.issues = [];
        }
        return item;
    });
};
const Publications = () => {
    const [issuesByVolume, setissuesByVolume] = useState([]);
    useEffect(() => {

        baseApi.get('/issue/byVolume').then((response) => {
            console.log(response.data.data);
            // let issues = groupByVolumeTitle(response.data.data);
            // console.log(JSON.parse(JSON.stringify(response.data.data)));
            console.log(JSON.parse(response.data.data[0].issues));
            let volumes = response.data.data;
            const convertedData = convertIssuesToJson(volumes);
            setissuesByVolume(convertedData);

        })
    }, []);
    return (
        <>

            <Box paddingX={{ xs: '20px', md: '100px' }} container sx={{ backgroundColor: '#eee' }}>

                <Typography color={'black'} textAlign={'center'} fontSize={{ xs: '30px', md: '40px' }} variant='h3'>
                    Archives
                </Typography>
                {issuesByVolume.map((volume, index) => {
                    return <Paper key={index} sx={{ padding: '20px', marginBottom: '10px' }}>
                        <Grid container rowGap={1} columnSpacing={'10'}>
                            <Grid sx={{ marginBottom: '10px', }} item xs={12}>
                                <Paper sx={{ backgroundColor: 'black', color: 'white' }}>
                                    <Typography sx={{ paddingLeft: '20px' }} fontSize={{ xs: '20px', md: '30px' }} variant='h4' >
                                        {volume.title}
                                    </Typography>
                                </Paper>
                            </Grid>
                            {/* {issues = JSON.parse(volume.issues)} */}
                            {volume.issues.map((issue, index) => {
                                return <Grid key={index} item lg={3} md={4} xs={12}>
                                    <Link href={`/issue/${issue.id}/paper`}>
                                        <Paper className='issue-link' sx={{ padding: '10px' }} >
                                            <Typography color={'black'} variant="h5" fontSize={{ xs: '14px', md: '20px' }} component="div">
                                                {issue.title}
                                            </Typography>

                                        </Paper>
                                    </Link>
                                </Grid>
                            })}




                        </Grid>
                    </Paper>
                })}



            </Box ></>
    )
}

export default Publications