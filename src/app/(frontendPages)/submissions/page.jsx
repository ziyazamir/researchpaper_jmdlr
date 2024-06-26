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
import { Divider, Grid } from '@mui/material';
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
import StarIcon from '@mui/icons-material/Star';
import TaskIcon from '@mui/icons-material/Task';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { ArticleOutlined, ArticleRounded, AutoStoriesOutlined, BadgeOutlined, CallEndOutlined, CallOutlined, LocationCityOutlined, NewspaperOutlined, SchoolOutlined } from '@mui/icons-material';

const guidelines = () => {

    return (
        <>
            <Card raised sx={{ backgroundColor: '#eee', borderRadius: '0' }}  >
                <Paper sx={{}} elevation={5}>
                    <Grid container paddingX={{ xs: '20px', md: '100px' }} justifyContent={'center'} className='' >
                        <Grid item xs={12} md={3}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} textAlign={'left'} variant='h5' fontSize={{ xs: '20px', md: '25px' }} >
                                    Eligibility
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Box >
                                <CardContent >
                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">

                                        Law students pursuing the three-year LL. B, as well as the five-year integrated LL.B. program, students pursuing LL.M. or Ph.D., Research Associates, Academicians, Educators, and professionals and practitioners in any field of Law are eligible to submit.
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>


                    </Grid>
                </Paper>
            </Card >
            <Card raised sx={{ backgroundColor: '#f5f1f1', borderRadius: '0' }}  >
                <Paper sx={{ backgroundColor: 'transparent' }} elevation={5}>
                    <Grid container paddingX={{ xs: '20px', md: '100px' }} justifyContent={'center'} className='' >
                        <Grid item xs={12} md={3}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} textAlign={'left'} variant='h5' fontSize={{ xs: '20px', md: '25px' }} >
                                    Theme
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Box >
                                <CardContent >
                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">

                                        Any topic related to law
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>


                    </Grid>
                </Paper>
            </Card >
            <Card raised sx={{ backgroundColor: '#eee', borderRadius: '0' }}  >
                <Paper sx={{}} elevation={5}>
                    <Grid container paddingX={{ xs: '20px', md: '100px' }} justifyContent={'center'} className='' >
                        <Grid item xs={12} md={3}>
                            <CardContent>
                                <Typography textOverflow={'clip'} borderBottom={'2px solid #eee'} textAlign={'left'} variant='h5' fontSize={{ xs: '20px', md: '25px' }} >
                                    Submissions Through Email
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Box >
                                <CardContent >
                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">

                                        All submissions must be emailed to submissions.ijclsi@gmail.com with the subject as ‘Manuscript Submission’ and a declaration to the effect that the manuscript is an original and previously unpublished work of the author/s.
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>


                    </Grid>
                </Paper>
            </Card >
            <Card raised sx={{ backgroundColor: '#f5f1f1', borderRadius: '0' }}  >
                <Paper sx={{ backgroundColor: 'transparent' }} elevation={5}>
                    <Grid container paddingX={{ xs: '20px', md: '100px' }} justifyContent={'center'} className='' >
                        <Grid item xs={12} md={3}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} textAlign={'left'} variant='h5' fontSize={{ xs: '20px', md: '25px' }} >
                                    Publication Fees
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Box >
                                <CardContent >
                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">

                                        Single Author: Rs.1000
                                        <br /> <Divider />
                                        Co-Author: Rs.1200
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>


                    </Grid>
                </Paper>
            </Card >
            <Card raised sx={{ backgroundColor: '#eee', borderRadius: '0' }}  >
                <Paper sx={{}} elevation={5}>
                    <Grid container paddingX={{ xs: '20px', md: '100px' }} justifyContent={'center'} className='' >
                        <Grid item xs={12} md={3}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} textAlign={'left'} variant='h5' fontSize={{ xs: '20px', md: '25px' }} >
                                    Theme
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Box >
                                <CardContent >
                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">

                                        Any topic related to law
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>


                    </Grid>
                </Paper>
            </Card >
            <Card raised sx={{ backgroundColor: '#f5f1f1', borderRadius: '0' }}  >
                <Paper sx={{ backgroundColor: 'transparent' }} elevation={5}>
                    <Grid container paddingX={{ xs: '20px', md: '100px' }} className='' >
                        <Grid item xs={12} md={10}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} textAlign={'left'} variant='h5' fontSize={{ xs: '20px', md: '25px' }} >
                                    Types of submissions: <Typography>Following word limit should strictly be adhered to:</Typography>
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item sx={{ margin: 'auto' }} xs={12} md={10}>
                            <Box >
                                <CardContent >
                                    <Grid2 container>
                                        <Grid xs={12} md={6}>
                                            <List
                                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"

                                            >

                                                <Paper sx={{ marginY: '7px' }}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Short Articles: (1000-2500 words, including footnotes)" />
                                                    </ListItemButton>
                                                </Paper>
                                                <Paper sx={{ marginY: '7px' }}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Book Reviews: (1000-3500 words, including footnotes)" />
                                                    </ListItemButton>
                                                </Paper>
                                                <Paper sx={{ marginY: '7px' }}>
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
                                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"

                                            >

                                                <Paper sx={{ marginY: '7px' }}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Long Articles: (2500-4000 words, including footnotes)" />
                                                    </ListItemButton>
                                                </Paper>
                                                <Paper sx={{ marginY: '7px' }}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Case Comments: (1000-2500 words, including footnotes)" />
                                                    </ListItemButton>
                                                </Paper>
                                                <Paper sx={{ marginY: '7px' }}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <CheckIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Research Papers: (2500-8000 words, including footnotes)" />
                                                    </ListItemButton>
                                                </Paper>



                                            </List>
                                        </Grid>

                                    </Grid2>


                                </CardContent>

                            </Box>
                        </Grid>

                    </Grid>
                </Paper>
            </Card >
            <Card raised sx={{ backgroundColor: '#eee', borderRadius: '0' }}  >
                <Paper sx={{}} elevation={5}>
                    <Grid container paddingX={{ xs: '20px', md: '100px' }} className='' >
                        <Grid item xs={10}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} textAlign={'left'} variant='h5' fontSize={{ xs: '20px', md: '25px' }} >
                                    Exclusivity and Copyright
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item sx={{}} xs={10}>
                            <Box >
                                <CardContent >
                                    <Typography>
                                        Submitted manuscripts should not be simultaneously considered by any other publication at the time of submission. The author/s undertake to inform Indian Journal of Contemporary Legal and Social Issues (IJCLSI) immediately in case the manuscript under consideration OR published manuscript is under consideration for publication elsewhere. Authors of articles published in Indian Journal of Contemporary Legal and Social Issues remain the copyright holders and grant third parties the right to use, reproduce, and share the article according to the Creative Commons license agreement. Indian Journal of Contemporary Legal and Social Issues (IJCLSI) reserves all the right to reject any paper at any stage of the publication process and it is the complete discretion of the editorial board and the authors have no right to object the reason behind such a decision.
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>

                    </Grid>
                </Paper>
            </Card >


        </>
    )
}

export default guidelines