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
            <Card raised sx={{ borderRadius: '0', backgroundColor: '#eee' }}  >
                <Paper elevation={5}>
                    <Grid container paddingX={{ xs: '20px', md: '100px' }} justifyContent={'center'} className='' >
                        <Grid item xs={12}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} textAlign={'left'} variant='h4' fontSize={{ xs: '20px', md: '30px' }} >
                                    General instructions
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box >
                                <CardContent >
                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">

                                        Long articles, short articles and research papers must be accompanied by an abstract not exceeding 300 words.
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box >
                                <CardContent >

                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">
                                        Up to 2 co-authors are allowed for all categories, except Case Notes and Legislative Comments wherein co-authorship is not permitted.
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box >
                                <CardContent >

                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">
                                        All works must be original and unpublished, and must not be pending for review before any other journal. Any form of plagiarism will result in immediate disqualification for publication in IJCLSI
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box >
                                <CardContent >

                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">
                                        While it is advisable to adhere to the word limits of each category, the journal may be flexible on the word limit depending on the quality of the article.
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>

                    </Grid>
                </Paper>
            </Card >
            <Card raised sx={{ borderRadius: '0', backgroundColor: '#e6e6e6' }}  >
                <Paper sx={{ borderRadius: '0', backgroundColor: 'transparent' }} elevation={5}>
                    <Grid container paddingX={{ xs: '20px', md: '100px' }} justifyContent={'center'} className='' >
                        <Grid item xs={12}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} textAlign={'left'} variant='h4' fontSize={{ xs: '20px', md: '30px' }} >
                                    Formats
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box >
                                <CardContent >
                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">

                                        <TaskAltIcon fontSize='40px' />   The first page of the manuscript should contain the name of the paper, the name of the authors, and their institutional affiliation followed by an abstract.
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box >
                                <CardContent >

                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">
                                        <TaskAltIcon fontSize='40px' />  The second page should commence with the main body of the manuscript.
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box >
                                <CardContent >

                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">
                                        <TaskAltIcon fontSize='40px' />  The name of the authors and their institutional affiliation must be mentioned in the manuscript.
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box >
                                <CardContent >

                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">
                                        <TaskAltIcon fontSize='40px' />   The main body of the manuscript should be in Times New Roman style, font size 12, with 1.5 line spacing and footnotes in Times New Roman Style, Size 10, with 1.0 line spacing. All headings must have uniform formatting.
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box >
                                <CardContent >

                                    <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'left'} marginBottom={'20px'} color="text.secondary" component="div">
                                        <TaskAltIcon fontSize='40px' /> Texts and footnotes should conform to the Bluebook 20th Edition.
                                    </Typography>


                                </CardContent>

                            </Box>
                        </Grid>

                    </Grid>
                </Paper>
            </Card >

            <Card raised sx={{ borderRadius: '0', }}  >
                <Paper sx={{ borderRadius: '0', backgroundColor: 'transparent', }} elevation={5}>
                    <Grid container paddingX={{ xs: '20px', md: '100px' }} justifyContent={'center'} className='' >
                        <Grid item xs={12}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} textAlign={'left'} variant='h5' >
                                    All submissions must contain the following:
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12}>
                            <Box >
                                <CardContent >

                                    <List
                                        sx={{ width: '100%', bgcolor: 'background.paper' }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"

                                    >
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText primary=" The manuscript in Word format (.doc or .docx) as a mail attachment. PDF/other formats/hard copy submissions will not be accepted." />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <Typography fontWeight={'bold'}>The body of the first page must mention the following :</Typography>
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <BadgeOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="Name of the author(s)" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <CallOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="Contact number" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SchoolOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="The academic year of the course pursuing (if applicable)." />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <AutoStoriesOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary=" Qualifications (if applicable)" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <LocationCityOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary=" Institutional affiliation" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <NewspaperOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary=" Title of the paper" />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <ArticleOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary=" The type of submission (Long Article, Essay/Short Article, Case note & Legislative Comment)" />
                                        </ListItemButton>


                                    </List>

                                </CardContent>

                            </Box>
                        </Grid>

                    </Grid>
                </Paper>
            </Card >
            <Card raised sx={{ borderRadius: '0', backgroundColor: '#e6e6e6' }}  >
                <Paper sx={{ borderRadius: '0', backgroundColor: 'transparent' }} elevation={5}>
                    <Grid container paddingX={{ md: '100px', xs: '20px' }} justifyContent={'center'} className='' >
                        <Grid item xs={12}>
                            <CardContent>
                                <Typography borderBottom={'2px solid #eee'} textAlign={'left'} variant='h5' >
                                    Peer Review Process
                                </Typography>
                                <Typography sx={{ marginTop: '20px' }} variant='h6'>
                                    All unsolicited manuscripts submitted to be considered for publication in Indian Journal of Contemporary Legal and Social Issues are subject to an editorial review process.
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item sx={{ margin: 'auto' }} xs={12}>
                            <Box >
                                <CardContent >

                                    <List
                                        sx={{ width: '100%', bgcolor: 'background.paper' }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"

                                    >

                                        <ListItemButton>
                                            <Typography fontWeight={'bold'}>The submitted manuscripts are reviewed on the following parameters:
                                                <Divider /><br />
                                                Relevance
                                                <Divider />
                                                <br />
                                                Structure <Divider /><br />
                                                Content <Divider /><br />
                                                Language <Divider /><br />
                                                Originality <Divider /><br />
                                                Coherence <Divider /><br />
                                                Cited sources</Typography>
                                        </ListItemButton>




                                    </List>

                                </CardContent>

                            </Box>
                            <CardContent>

                                <Typography sx={{ marginTop: '20px' }} fontSize={{ xs: '14px', md: '20px' }} variant='h6'>
                                    Once the manuscript is accepted for publication, it is assigned for editorial review by the Editorial Board. The first step in the editing process is simply reading your article. The editors do this as a first check to make sure the article is of sufficient quality. The editors will also check to make sure you adhered to the citation guidelines in your article. If your article passes this stage, we will send it to a referee to review based on academic level and content. The executive editor will contact you about the results of this review process and we will send you any comments or suggestions about your article. If your article is accepted, we will ask you to make the changes suggested by the editors. We will contact you to set an appropriate deadline to get the improved version back from you. At this point, our editorial board will read the article closely for style, form, content, and language use. After your approval of the final version, the article will be published in the journal.
                                </Typography>
                            </CardContent>
                        </Grid>

                    </Grid>
                </Paper>
            </Card >

        </>
    )
}

export default guidelines