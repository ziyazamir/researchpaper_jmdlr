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
import '../assets/css/style.css';
import Image from 'next/image';
// import DashboardAppBar from '@/components/admin/dashboardHeader';
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
          {/* <Grid xs={12}>
            <DashboardAppBar />
          </Grid> */}
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
                  Embracing Diverse Perspectives in Legal Academia
                </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  The Journal of Multi-Disciplinary Legal Research (JMDLR) is a bi-monthly, open-access and single-blind peer reviewed journal fostering critical dialogue at the intersection of law and other disciplines. Here's what makes JMDLR unique: </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  Diverse Perspectives: We welcome contributions from academics, practitioners, and students alike, ensuring a rich tapestry of viewpoints.   </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  Multidisciplinary Approach: We believe that understanding the law requires looking beyond traditional boundaries. JMDLR explores the interplay of law with fields like sociology, economics, history, and more.   </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  Accessible Scholarship: Our open-access format breaks down barriers to knowledge, making cutting-edge legal research readily available to all.</Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  Engaging Content:  From thought-provoking articles and case comments to book reviews and legislative analyses, JMDLR offers a diverse range of content to ignite your intellectual curiosity.   </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  Contribute your voice.  Shape the future of legal discourse
                  Submit your work, engage in stimulating discussions, and be a part of a vibrant community shaping the future of law and its impact on society.
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
              src="/assets/ijclsi_side2.png.jpg"
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
                  At the forefront of advancing legal scholarship, JMDLR embraces Open Access as a cornerstone principle. We recognize the invaluable contribution of authors and respects their intellectual property rights. By publishing under a Creative Commons Attribution License (CC BY), authors retain copyright while granting us the privilege to disseminate their work broadly. This license encourages the legal community to engage with, cite, and build upon published research freely, provided appropriate credit is given.
                </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  All articles published in JMDLR are made immediately available online, free of charge, to readers worldwide. This ensures that our authors' research reaches the widest possible audience, maximizing its impact, visibility, and potential for collaboration.  </Typography>



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
                    JMDLR is an open-access platform dedicated to promoting critical analysis and meaningful discussions of legal issues and developments in India. As an innovative academic journal, we are committed to fostering a dynamic and interdisciplinary legal discourse that enriches our understanding of the law.
                  </Typography>
                  <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                    Our Mission: Driving Legal Scholarship and Dialogue
                    At the heart of JMDLR's mission is a steadfast commitment to publishing high-quality research articles, case comments, and book reviews that delve deep into the complexities of legal matters. By encouraging critical analysis and incorporating diverse perspectives from various disciplines, we strive to provide a comprehensive and thought-provoking exploration of the evolving legal landscape.

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
                  JMDLR takes great pride in its widespread indexing across 20+ prestigious platforms, ensuring its content reaches a vast audience. This extensive indexing guarantees that the high-quality legal scholarship published in the journal is easily discoverable and accessible to researchers, practitioners, legal professionals and academicians worldwide.  </Typography>
                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">
                  Manuscripts published on JMDLR are widely disseminated through its growing presence on popular social media platforms. Its active accounts on LinkedIn, Instagram, and Twitter serve as dynamic hubs for sharing updates, promoting newly published articles, and engaging with the broader legal community. Through these channels, the journal effectively amplifies its reach, fostering lively discussions and enabling its readership to stay informed about the latest developments in legal research and analysis.   </Typography>



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
          <Grid item xs={12} marginY={'30px'}>
            <Typography variant='h6' sx={{ fontSize: '15px' }} textAlign={'center'}>© Copyright   JMDLR  All rights reserved</Typography>
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