import * as React from 'react';
import {
    Link as RouterLink,
    Outlet,
    useLocation,
} from 'react-router-dom';


import { SnackbarProvider } from 'notistack';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Breadcrumbs } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'

import AppBar from './components/AppBar';
import NavDrawer from './components/NavDrawer';

import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

const get_drawer_state = () => {
    let state = localStorage.getItem("drawer")
    return state === "true" ? true : false
}

// Breadcrumbs support

function LinkRouter(props) {
    return <Link {...props} component={RouterLink} />
}

function RouterBreadCrumbs() {
    const theme = useTheme()
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)

    return (
        <Box sx={{ backgroundColor: theme.palette.secondary.light, marginTop: 0 }}>
            <Breadcrumbs aria-label="breadcrumb">
                <LinkRouter underline="hover" color="inherit" sx={{ display: 'flex', alignItems: 'center' }} to="/">
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </LinkRouter>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    console.log("value:", value, "last:", last, "to:", to)
                    return last ? (
                        <Typography color="text.primary" key={to}>
                            {value}
                        </Typography>
                    ) : (
                        <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                            {value}
                        </LinkRouter>
                    );
                })}
            </Breadcrumbs>
        </Box >
    )
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        marginTop: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const Container = styled(Box)(
    ({ theme }) => `
    margin: ${theme.spacing(2)};
  `,
);

export default function Layout({ children }) {
    const [open, setOpen] = React.useState(get_drawer_state());

    const handleDrawerClicked = () => {
        setOpen(!open);
        localStorage.setItem("drawer", !open)
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <SnackbarProvider>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar open={open} onClick={handleDrawerClicked} />
                    <NavDrawer open={open} />

                    <Main open={open}  >
                        <Toolbar />
                        <RouterBreadCrumbs />
                        <Container>
                            <Outlet />
                        </Container>
                    </Main>
                </Box>
            </SnackbarProvider>
        </LocalizationProvider>
    );
}
