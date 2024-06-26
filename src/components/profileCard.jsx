import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
export default function MultiActionAreaCard() {
    return (
        <Card >
            <CardActionArea>

                <Paper sx={{ width: '300px', height: '300px',backgroundImage: 'url(https://ijclsi.in/static/media/Sadaf%20Khan.202965f5.png)' }} ></Paper>
                <CardContent> 
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}