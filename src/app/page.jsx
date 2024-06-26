"use client"
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
import './assets/css/style.css';
import Image from 'next/image';
import DashboardAppBar from '@/components/admin/dashboardHeader';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <>
      <Card >
        <Grid sx={{ height: '100%', paddingX: '50px' }} container justifyContent={'center'} alignItems={'center'} >
          <Grid item xs={12}>
            <Box sx={{ position: 'relative' }} >
              {/* <CardContent >
                <Typography variant="h2">
                  Indian Journal of Contemporary Legal and Social Issues
                </Typography>
                <Typography variant={{ sx:'h1' }} color="text.secondary" component="div">
                  ISSN: 2583-2824
                </Typography>
              </CardContent> */}

              <Image
                src="/assets/image.png"
                alt="profile"

                sizes='width:100%'
                height={100}
                width={100}
                style={{ objectFit: "cover", width: '100%', height: 'auto' }}
              // className=" left-0 object-cover rounded-2xl"
              />
              {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box> */}
            </Box>
          </Grid>
          <Grid xs={12}>
            <DashboardAppBar />
          </Grid>
          {/* <Grid item xs={12}>
            <CardMedia
              component="img"
              sx={{ width: '100%', margin: 'auto' }}
              image="https://www.enago.com/academy/wp-content/uploads/2019/08/manuscript.png"
              alt="Live from space album cover"
            />
          </Grid> */}
        </Grid>
      </Card>

      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >

          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >

                <Typography variant={{ sx: 'h1' }} fontSize={{ xs: '20px', md: '30px' }} marginBottom={'20px'} color="black" component="div">
                  A Platform for Scholarly Discourse in Law
                </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  The Indian Journal of Contemporary Legal and Social Issues (IJCLSI) is a quarterly, peer-reviewed, open-access journal dedicated to fostering academic discourse on legal and allied disciplines. This scholarly journal serves as a dynamic forum for scholars, practitioners, and students to share their insights and perspectives.
                </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  IJCLSI welcomes submissions in the form of short articles, long articles, book reviews, case comments, legislative comments, and research papers. By publishing diverse contributions, the journal aims to promote legal awareness, stimulate intellectual exchange, and bridge the gap between academia, practice, and student communities.
                </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  Whether you are an academic, a legal professional, or a student, IJCLSI invites you to contribute to the ongoing discourse and shape the future of legal and social discourse. Submit your work, engage with thought-provoking content, and be a part of this vibrant intellectual community.
                </Typography>


              </CardContent>
              {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/ijclsi_side.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '80%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>

        </Grid>
      </Card >
      <Card sx={{ borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} justifyContent={'center'}>

          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >

                <Typography variant={{ sx: 'h1' }} fontSize={{ xs: '20px', md: '30px' }} marginBottom={'20px'} color="black" component="div">
                  Open Access Policy
                </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  IJCLSI is committed to promoting open access to scholarly research and facilitating knowledge dissemination. We follow an immediate open access model, making all published articles freely available online to readers worldwide, without subscription barriers or paywalls. This approach supports the free exchange of knowledge and maximizes the visibility, impact, and potential for collaboration within the academic community.
                </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  Authors published in IJCLSI retain copyright ownership while granting the journal the right to publish their work under a Creative Commons Attribution License (CC BY). The Authors grant third parties the right to use and share their work under the terms of a Creative Commons license agreement, as long as proper attribution is given to the original authors. This empowers authors to maintain control over their intellectual property while facilitating the widespread dissemination of their research.
                </Typography>



              </CardContent>

            </Box>
          </Grid>
          <Grid item xs={12} md={6} justifyContent={'center'}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/L5rVH1KGBCY?si=qWe7CzsinD4retpp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Grid>
          <Grid item xs={12} md={8} marginY={'40px'}>
            <Typography variant='h5' fontSize={{ xs: '20px', md: '30px' }} fontWeight={'bold'} textAlign={'center'}>&quot;Open Access means more readers, more potential collaborators, more citations for their work, and ultimately more recognition for them and their institution.&quot;
            </Typography>
            <Typography variant='h4' fontSize={{ xs: '10px', md: '15px' }} textAlign={'right'}> - University College Cork Library</Typography>
          </Grid>
        </Grid>
      </Card >



      <Card raised sx={{ borderRadius: '0', backgroundColor: '#f7f7f7', }}  >
        <Paper
          backgroundColor={'#f7f7f7'}
          sx={{ backgroundColor: '#f7f7f7' }}
          // sx={{ backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-arrow-hitting-target_23-2151266580.jpg)', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', WebkitBackgroundSize: 'cover', }}
          elevation={5}>
          <Grid container paddingX={{ xs: '20px', md: '50px' }} justifyContent={'center'} className='' >
            <Grid item xs={12}>
              <Typography borderBottom={'2px solid #eee'} textAlign={'center'} variant='h3' margin={'auto'} display={'block'}>
                Aim
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Box >
                <CardContent sx={{ textAlign: 'center' }} >




                  <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                    IJCLSI is an open access platform that aims to promote critical analysis and discussion of legal issues and developments in India. <br />

                  </Typography>
                  <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                    IJCLSI seeks to encourage and publish high-quality research articles, case comments, and book reviews that critically analyze legal issues, trends, and developments. It fosters interdisciplinary approaches by incorporating perspectives from various disciplines, enriching legal discourse and providing a comprehensive understanding of legal matters. <br />

                  </Typography>
                  <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                    With its open access model, the journal enhances access to legal information, promoting legal literacy, transparency, and accountability. Adhering to the highest standards of academic rigor and peer review, IJCLSI ensures that published articles and case comments meet the highest quality, relevance, and originality standards. Its target audience includes legal scholars and researchers, practitioners, policymakers, advocates, and the general public interested in legal issues and developments.

                  </Typography>

                </CardContent>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box> */}
              </Box>
            </Grid>

          </Grid>
        </Paper>
      </Card >
      <Card sx={{ backgroundColor: 'white', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >

          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >

                <Typography variant={{ sx: 'h1' }} fontSize={{ xs: '20px', md: '30px' }} marginBottom={'20px'} color="black" component="div">
                  Indexing
                </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  IJCLSI takes great pride in its widespread indexing across 30+ prestigious platforms, ensuring its content reaches a vast audience. This extensive indexing guarantees that the high-quality legal scholarship published in the journal is easily discoverable and accessible to researchers, practitioners, legal professionals and academicians worldwide
                </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  Manuscripts published on IJCLSI are widely disseminated through its growing presence on popular social media platforms. Its active accounts on LinkedIn, Instagram, and Twitter serve as dynamic hubs for sharing updates, promoting newly published articles, and engaging with the broader legal community. Through these channels, the journal effectively amplifies its reach, fostering lively discussions and enabling its readership to stay informed about the latest developments in legal research and analysis.
                </Typography>



              </CardContent>
              {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box> */}
            </Box>
          </Grid>
          <Grid position={'relative'} item xs={12} md={6} justifyContent={'center'}>
            <Image
              src="/assets/ijclsi.jpg"
              alt="profile"


              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '100%', height: 'auto', marginY: 'auto', display: 'block', display: 'absolute' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>

        </Grid>
      </Card >
      <Card sx={{ maxHeight: '300px', backgroundColor: 'white', borderRadius: '0', }}>

        <Grid container paddingX={{ xs: '20px', md: '50px' }} justifyContent={'space-around'} columnGap={'20px'} >
          <Grid item xs={12}>
            <Typography textAlign={'center'} variant='h4' marginY={'20px'}>Follow Us On</Typography>

          </Grid>

          <Grid item xs={1} justifyContent={'center'}>
            <Image
              src="/assets/social/facebook.png"
              alt="profile"


              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: 'auto', height: '50px', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={1} justifyContent={'center'}>
            <Image
              src="/assets/social/twitter.png"
              alt="profile"


              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: 'auto', height: '50px', margin: 'auto', display: 'block', }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={1} justifyContent={'center'}>
            <Image
              src="/assets/social/whatsapp.png"
              alt="profile"


              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: 'auto', height: '50px', margin: 'auto', display: 'block', }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={1} justifyContent={'center'}>
            <Image
              src="/assets/social/linkedin.png"
              alt="profile"

              objectFit="cover"
              sizes='width:100%'
              height={100}
              width={100}
              style={{ width: 'auto', height: '50px', margin: 'auto', display: 'block', }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={1} justifyContent={'center'}>
            <Image
              src="/assets/social/youtube.png"
              alt="profile"

              objectFit="cover"
              sizes='width:100%'
              height={100}
              width={100}
              style={{ width: 'auto', height: '50px', margin: 'auto', display: 'block', }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={1} justifyContent={'center'}>
            <Image
              src="/assets/social/instagram.png"
              alt="profile"

              objectFit="cover"
              sizes='width:100%'
              height={100}
              width={100}
              style={{ width: 'auto', height: '50px', margin: 'auto', display: 'block', }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} marginY={'20px'}>
            <Typography variant='h6' textAlign={'center'}>© Copyright   IJCLSI  All rights reserved</Typography>
          </Grid>
        </Grid>
      </Card >
      {/* <Card raised sx={{ borderRadius: '0', backgroundColor: '#eee', }}  >
        <Paper sx={{ paddingY: '20px' }} elevation={5}>
          <Grid container paddingX={{ xs: '20px',md:'100px' }} backgroundColor={'white'} >
            <Grid item xs={12}>
              <Typography backgroundColor={'#e6e6e6'} color={'black'} borderBottom={'2px solid #eee'} textAlign={'center'} variant='h4' margin={'auto'} display={'block'}>
                Publication Frequency
              </Typography>
            </Grid>
            <Grid item sx={{ margin: 'auto' }} xs={10}>
              <Box >
                <CardContent >

                  <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} textAlign={'center'} marginBottom={'20px'} color="text.secondary" component="div">
                    The journal publishes one issue quarterly i.e. one issue every three months.
                  </Typography>


                </CardContent>
               
              </Box>
            </Grid>

          </Grid>
        </Paper>
      </Card > */}
    </>
  );
}