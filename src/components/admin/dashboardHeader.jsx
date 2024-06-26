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

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function DashboardAppBar() {
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
        <AppBar sx={{ boxShadow: 'none', borderTop: '2px solid' }} position="static" color="transparent">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'center', } }}>
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
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
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

                    <Box sx={{ color: 'black', flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', columnGap: '35px !important', } }}>
                        <Button
                            sx={{
                                ':hover': {
                                    bgcolor: '#f6eb8a', // theme.palette.primary.main
                                    color: 'black',
                                },
                            }} >
                            <Link
                                href={'/'}

                                onClick={handleCloseNavMenu}
                                color='#eee'
                                sx={{ marginRight: '50px', display: 'block', color: 'black !important' }}

                            >
                                Home
                            </Link>
                        </Button>
                        <Button
                            sx={{
                                ':hover': {
                                    bgcolor: '#f6eb8a', // theme.palette.primary.main
                                    color: 'black',
                                },
                            }} >
                            <Link
                                href={'/about'}

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                About
                            </Link>
                        </Button>
                        <Button
                            sx={{
                                ':hover': {
                                    bgcolor: '#f6eb8a', // theme.palette.primary.main
                                    color: 'black',
                                },
                            }} >
                            <Link
                                href={'/publications'}

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Publications
                            </Link>
                        </Button>
                        <Button
                            sx={{
                                ':hover': {
                                    bgcolor: '#f6eb8a', // theme.palette.primary.main
                                    color: 'black',
                                },
                            }} >
                            <Link
                                href={'/guidelines'}

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Guidelines
                            </Link>
                        </Button>
                        <Button
                            sx={{
                                ':hover': {
                                    bgcolor: '#f6eb8a', // theme.palette.primary.main
                                    color: 'black',
                                },
                            }} >
                            <Link

                                href={'/submissions'}

                                onClick={handleCloseNavMenu}
                                sx={{ marginRight: '5px', color: 'white', display: 'block' }}
                            >
                                Submissions
                            </Link>
                        </Button>
                        <Button
                            sx={{
                                ':hover': {
                                    bgcolor: '#f6eb8a', // theme.palette.primary.main
                                    color: 'black',
                                },
                            }} >
                            <Link

                                href={'/indexing'}

                                onClick={handleCloseNavMenu}
                                sx={{ marginRight: '5px', color: 'white', display: 'block' }}
                            >
                                indexing
                            </Link>
                        </Button>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default DashboardAppBar;
