import * as React from 'react';
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
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import GavelIcon from '@mui/icons-material/Gavel';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import CheckIcon from '@mui/icons-material/Check';
const about = () => {

    return (
        <>
            <Card raised sx={{ backgroundColor: '#eee', borderRadius: '0' }}  >
                <Paper elevation={5}>
                    <Grid container paddingX={{ xs: '10px', md: '100px' }} className='' justifyContent={'center'} >
                        <Grid item xs={12}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} fontSize={{ xs: '20px', md: '30px' }} textAlign={'left'} variant='h3' >
                                    Focus
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item sx={{}} xs={12}>
                            <Box >
                                <CardContent >

                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">
                                        Our aim is to upgrade the level of interaction and discussion about contemporary and emerging issues of law. We are eager to become a highly cited publication, through quality contributions from students, academicians and professionals from the industry. IJCLSI welcomes contributions from all legal branches, as long as the work is original, unpublished, plagiarised and in consonance with the submission guidelines
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>

                    </Grid>
                </Paper>
            </Card >
            <Card raised sx={{ backgroundColor: '#eee', borderRadius: '0' }}  >
                <Paper sx={{ padding: '20px', backgroundColor: 'transparent' }} elevation={5}>
                    <Grid container paddingX={{ xs: '10px', md: '100px' }} className='' >
                        <Grid item xs={12}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} fontSize={{ xs: '20px', md: '30px' }} textAlign={'right'} variant='h3' >
                                    Aim and Scope
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item sx={{}} xs={12}>
                            <Box >
                                <CardContent >

                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'right'} marginBottom={'20px'} color="text.secondary" component="div">
                                        Our aim is to upgrade the level of interaction and discussion about contemporary and emerging issues of law. We are eager to become a highly cited publication, through quality contributions from students, academicians and professionals from the industry. IJCLSI welcomes contributions from all legal branches, as long as the work is original, unpublished, plagiarised and in consonance with the submission guidelines
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>

                    </Grid>
                </Paper>
            </Card >
            <Card raised sx={{ backgroundColor: '#eee', borderRadius: '0' }}  >
                <Paper elevation={5}>
                    <Grid container paddingX={{ xs: '10px', md: '100px' }} className='' >
                        <Grid item xs={12}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} fontSize={{ xs: '20px', md: '30px' }} textAlign={'left'} variant='h5' >
                                    The following is a non-exhaustive subject list outlining the scope of the journal:
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item sx={{}} xs={12} md={6}>
                            <Box >
                                <CardContent >

                                    <List
                                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"

                                    >
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Criminal Law" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Civil Law" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Trade Law" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Environment Law" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Investment Law" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Intellectual Property and trade" />
                                        </ListItemButton>



                                    </List>

                                </CardContent>

                            </Box>
                        </Grid>
                        <Grid item sx={{}} xs={12} md={6}>
                            <Box >
                                <CardContent >

                                    <List
                                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"

                                    >


                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Intellectual Property and trade" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Public health and trade" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Arbitration
" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Competition law and policy" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Economics and law" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="WTO and etc" />
                                        </ListItemButton>

                                    </List>

                                </CardContent>

                            </Box>
                        </Grid>

                    </Grid>
                </Paper>
            </Card >
            <Card raised sx={{ backgroundColor: '#eee', borderRadius: '0' }}  >
                <Paper sx={{ padding: '20px', backgroundColor: 'transparent' }} elevation={5}>
                    <Grid container paddingX={{ xs: '10px', md: '100px' }} className='' >
                        <Grid item xs={12}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} fontSize={{ xs: '20px', md: '30px' }} textAlign={'left'} variant='h5' >
                                    Types of submissions:
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item sx={{}} xs={12}>
                            <Box >
                                <CardContent >
                                    <Grid2 container justifyContent={'center'}>
                                        <Grid xs={12} md={6}>
                                            <List
                                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"

                                            >

                                                <Paper sx={{ marginBottom: '7px' }}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Short Articles: (1000-2500 words, including footnotes)" />
                                                    </ListItemButton>
                                                </Paper>
                                                <Paper sx={{ marginBottom: '7px' }}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Book Reviews: (1000-3500 words, including footnotes)" />
                                                    </ListItemButton>
                                                </Paper>
                                                <Paper sx={{ marginBottom: '7px' }}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Legislative Comments: (1000-2500 words, including footnotes)" />
                                                    </ListItemButton>
                                                </Paper>



                                            </List>
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                            <List
                                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"

                                            >

                                                <Paper sx={{ marginBottom: '7px' }}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Long Articles: (2500-4000 words, including footnotes)" />
                                                    </ListItemButton>
                                                </Paper>
                                                <Paper sx={{ marginBottom: '7px' }}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Case Comments: (1000-2500 words, including footnotes)" />
                                                    </ListItemButton>
                                                </Paper>
                                                <Paper sx={{ marginBottom: '7px' }}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Research Papers: (2500-8000 words, including footnotes)" />
                                                    </ListItemButton>
                                                </Paper>



                                            </List>
                                        </Grid>
                                        <Grid marginTop={5} xs={12}>
                                            <Typography textAlign={'center'} variant='h4'>Contact Us <DraftsIcon /></Typography>
                                            <Typography sx={{ textDecoration: 'underline black' }} textAlign={'center'}><a href="mailto:editorinchief.ijclsi@gmail.com">editorinchief.ijclsi@gmail.com</a></Typography>
                                        </Grid>

                                    </Grid2>


                                </CardContent>

                            </Box>
                        </Grid>

                    </Grid>
                </Paper>
            </Card >
        </>
    )
}

export default about