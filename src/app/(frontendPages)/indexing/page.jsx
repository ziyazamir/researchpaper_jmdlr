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
import '../../assets/css/style.css';
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


      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/ici.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  Indian Citation Index (ICI) is a home grown abstracts and citation database, with multidisciplinary objective information/knowledge contents from about 1000 top Indian scholarly journals. It provides powerful search engine basically to perform search and evaluation for researchers, policy makers, decision makers etc. At present, it is planned to launch this long awaited and needed information tool with five years back files (depth) which would go over 10 years and beyond in a year's time. ICI database is a powerful tool that let you search, track, measure and collaborate in the sciences, social sciences, arts, and humanities to turns raw data/information into the powerful knowledge you need.
                `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/paperity.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  Paperity was launched in 2014 as the first aggregator of Open Access journals and papers, "gold" and "hybrid", that covers all academic disciplines and actively indexes dispersed journal websites.  <br />The purpose of Paperity is to:
                  <br /> •	give readers easy and unconstrained access to thousands of journals from hundreds of disciplines in one central location;
                  <br /> •	help authors reach their target audience, disseminate discoveries more effectively and maximize research impact;
                  <br /> •	raise exposure of journals, boost their readership and encourage new manuscript submissions.
                  Paperity is the way towards more efficient scholarly communication in all research fields, from Sciences, Technology, Medicine, to Social Sciences, to Humanities and Arts.

                `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/zenodo.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  Zenodo is derived from Zenodotus, the first librarian of the Ancient Library of Alexandria and father of the first recorded use of metadata, a landmark in library history.
                `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/rji.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  Research Journal Impact Factor (RJIF) provides quantitative and qualitative tool for ranking, evaluating and categorizing the journals for academic evaluation and excellence. This factor is used for evaluating the prestige of journals. The evaluation is carried out by considering the factors like peer review originality, scientific quality, technical editing quality, editorial quality and regularity.  `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/iijf.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  International Innovative Journal Impact Factor (IIJIF) has been established to promote various platforms related to Academic and Research across the world to make it easily accessible and more organized. A Team of Reputed Researchers/Scientists have been working continuously to make it possible. IIJIF provides a much desired platform for Researchers, Editors, Publishers and Conference Organizers through its exclusive services that are Indexing of Research Journals, Listing of National/International Conferences and Quality Research serial publications. IIJIF also evaluates Journal Impact Factor (JIF) to set a benchmark for the quality of Serial publications across the world. Indexing of Journal helps the research to get global excellence.  `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/advance.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  Advanced Science Index is a indexing service that indexes publishers of scientific materials. It is aiming at rapid evaluation and indexing of all local and international scholarly scientific journals.  `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/international.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  The ISI server provides indexing of major international journals and proceedings. Author can get information about international journal impact factor, proceedings (research papers) and information on upcoming events. All the journal pages have pointers to Web pages of the publishers which are integrated into the ISI stream pages. `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/sif.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  Systematic Impact Factor (SIF) is Systematic Investigation of Quality of Journal. SIF is internationally recognised platform where researchers, academecians, students can find quality of journal based on different parameters.
                  SIF is calculated based on quality parameters like citation report of journal, editorial board, online infrastructure of journal, acceptance/rejection ratio of journal, internationalisation of journal, paper publication quality etc.
                `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/copernicus.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  ICI World of Journals is a global database dedicated to scientific journals from around the world. Each Editorial Office registered in the ICI World of Journals database obtains free of charge access to the IT system that gives a possibility to run a Journal Passport – an up-to-date showcase of a journal on the Internet. Apart from information about the Editorial Board Team, publisher, journal website, or a description, the Editorial Office can publish information about scientific articles (metadata as well as full content in PDF).  `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/i2or.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  International Institute of Organized Research (I2OR) is registered MSME with Ministry of MSME, Government of India Registration Number: UDYAM-PB-20-0002405 offering Numerous Academic Programs Since 2013. I2OR™ is also a registered Internship Provider at AICTE Internships and registered Trademark under The Trade Mark Act, 1999. I2OR has been established to promote various domains related to Education and Research around the globe to make it easily accessible and more organized. A Team of Reputed Researchers/Scientists have been working continuously to make it possible. I2OR provides a much desired platform for Researchers, Educators, Academic Leaders through its exclusive services viz. Professional Memberships, Short Term Courses, FDPs, Workshops, Conferences, Conclaves, National and International Award Programs. `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/road.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  ROAD is a service offered by the ISSN International Centre with the support of the Communication and Information Sector of UNESCO.
                  Launched in December 2013, ROAD provides a free access to those ISSN bibliographic records which describe scholarly resources in Open Access: journals, monographic series, conference proceedings, academic repositories and scholarly blogs. These records, created by the ISSN Network (93 National Centres worldwide + the International Centre), are enriched by information extracted from indexing and abstracting databases, directories (DOAJ, Latindex, The Keepers registry) and journals indicators (Scopus).
                  ROAD is in line with the actions of UNESCO for promoting Open Access to scientific resources. ROAD is complementary to the Global Open Access Portal (GOAP) developed by UNESCO and providing a snapshot of the status of Open Access to scientific information around the world.
                `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/bib.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  ResearchBib is open access with high standard indexing database for researchers and publishers. Research Bible may freely index journals, research papers, call for papers, research position. `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/sajli.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  Scholar Article Journal Index (SAJI) provides scientific and scholarly journal listing and indexing service, and calculate impact factor of journal for its higher acceptability and excellence. It is an online medium of introducing journal for author, researcher and publisher by increasing visibility of open access scientific and scholarly journals. There are thousands of journal on different subject. Our service helps to find appropriate journal for publishing and referring scientific article of authors. With us, anyone can find and check about a particular journal for its standards, SAJI indexing, impact factor status and other common facts about a journal. We ensure SAJI qualifications, e.g., mostly indexing and impact factor, through our evaluation procedure and associated criteria. Thus, editors, authors and researchers can stand on the excellence of a journal, which is based on different web-based and non-web based critical and generated analytical parameters.   `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/root.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  Root Society for Indexing and Impact Factor Service (rootindexing.com) is a society to provide indexing to all types of online and offline journals  to get international visibility of research and also provide impact factor (RIF-Root Impact Factor) to the journal to impove journal visibility in the world of research.  Lot of members are giving their service to this society. It is a completely free service to index any journal in the world.`}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/portal.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  IP Indexing is a collection of online journals related to multidisciplinary subjects from each and every corner of the world. We are providing a platform to showcase the research of a common researcher to the whole community. It segregates the quality control of open-access journals, and comprehensive information, making it easy to discover, increasing citations, and allowing retrieval and reuse from all over the world.   `}</Typography>


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
      </Card >
      <Card sx={{ backgroundColor: '#f7f7f7', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid container paddingX={{ xs: '20px', md: '50px' }} >
          <Grid item xs={12} md={6} alignContent={'center'} justifyContent={'center'}>
            <Image
              src="/assets/indexingImages/ifsij.png"
              alt="profile"

              sizes='width:100%'
              height={100}
              width={100}
              style={{ objectFit: "cover", width: '50%', height: 'auto', margin: 'auto', display: 'block' }}
            // className=" left-0 object-cover rounded-2xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <CardContent >



                <Typography variant="h6" fontSize={{ xs: '14px', md: '20px' }} marginBottom={'20px'} color="text.secondary" component="div">{`
                  IFSIJ is an international, recognized platform for promoting scientific achievements, as well as supporting publishers and scientific communities interested in state of the art research activities in innovation and applied science areas. IFSIJ is an impact measuring service for international journals and conference series since 2014.  It provides citation indexing, analysis, and maintains citation databases covering thousands of academic journals, books, proceedings. IFSIJ provides a detailed analysis report of individual journal for further improvement of respective journal in   `}</Typography>


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
      </Card >







    </>
  );
}