'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import Image from 'next/image';

const pages = ['Home',
    'About Us',
    'Publications',
    'Editiorial Board',
    'Guidelines',
    'Submissions'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ backgroundColor: 'white', color: 'black', paddingY: '10px' }} position="static">
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: 'space-between' }} disableGutters justifyContent={'space-between'}>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    {/* <Tooltip sx={{ marginRight: '10px !importanat' }} title="Open settings"> */}
                    {/* <IconButton onClick={handleOpenUserMenu} sx={{ display: { xs: 'none', md: 'flex' }, marginRight: '10px !importanat' }} >
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton> */}
                    {/* </Tooltip> */}
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            // fontFamily: 'monospace',
                            fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textTransform: 'capitalize',
                            textDecoration: 'none',
                        }}
                    >
                        Indian Journal of contempory legal and social issues
                    </Typography> */}
                    <Box display={{ xs: 'none', md: 'block' }}>
                        <Image
                            src="/assets/navlogo.png"
                            alt="profile"
                            dis
                            sizes='width:100%'
                            height={100}
                            width={100}
                            style={{ objectFit: "cover", width: 'auto', height: '90px', margin: 'auto', }}
                        // className=" left-0 object-cover rounded-2xl"
                        />
                    </Box>
                    <Box display={{ xs: 'block', md: 'none' }}>
                        <Image
                            src="/assets/navlogo.png"
                            alt="profile"

                            sizes='width:100%'
                            height={100}
                            width={100}
                            style={{ objectFit: "cover", width: 'auto', height: '50px', margin: 'auto', display: 'block' }}
                        // className=" left-0 object-cover rounded-2xl"
                        />
                    </Box>
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                float: 'right', display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem>
                                <Link
                                    href={'/'}

                                    onClick={handleCloseNavMenu}
                                    sx={{ marginRight: '50px', color: 'white', display: 'block' }}

                                >
                                    Home
                                </Link></MenuItem>
                            <MenuItem>
                                <Link
                                    href={'/about'}

                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    About
                                </Link></MenuItem>
                            <MenuItem>
                                <Link
                                    href={'/publications'}

                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Publications
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                    href={'/guidelines'}

                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Guidelines
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link

                                    href={'/submissions'}

                                    onClick={handleCloseNavMenu}
                                    sx={{ marginRight: '5px', color: 'white', display: 'block' }}
                                >
                                    Submissions
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link

                                    href={'/indexing'}

                                    onClick={handleCloseNavMenu}
                                    sx={{ marginRight: '5px', color: 'white', display: 'block' }}
                                >
                                    Indexing
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}

                    <Box sx={{
                        flexGrow: 1, columnGap: '60px', justifyContent: 'end',

                        display: { xs: 'none', md: 'flex' }
                    }}>
                        {/* {pages.map((page) => ( */}
                        <Link
                            href={'/'}

                            onClick={handleCloseNavMenu}
                            sx={{ marginRight: '50px', color: 'white', display: 'block' }}

                        >
                            Home
                        </Link>
                        <Link
                            href={'/about'}

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            About
                        </Link>
                        <Link
                            href={'/publications'}

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Publications
                        </Link>
                        <Link
                            href={'/guidelines'}

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Guidelines
                        </Link>
                        <Link

                            href={'/submissions'}

                            onClick={handleCloseNavMenu}
                            sx={{ marginRight: '5px', color: 'white', display: 'block' }}
                        >
                            Submissions
                        </Link>
                        <Link

                            href={'/indexing'}

                            onClick={handleCloseNavMenu}
                            sx={{ marginRight: '5px', color: 'white', display: 'block' }}
                        >
                            Indexing
                        </Link>
                        {/* ))} */}
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
}
//  ResponsiveAppBar;
