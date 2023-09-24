import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings'



export default function AppBar({ open, onClick }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleSettingsMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSettingsClose = () => {
        setAnchorEl(null);
    };

    const handlePropertiesMenu = () => {
        setAnchorEl(null)
    }

    return (
        <MuiAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>

            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={onClick}
                >
                    {open ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    OSCAL Builder
                </Typography>
                <Button color="inherit">Login</Button>
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="settings-menu-appbar"
                        aria-haspopup="true"
                        onClick={handleSettingsMenu}
                        color="inherit"

                    >
                        <SettingsIcon />
                    </IconButton>
                    <Menu
                        id="settings-menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={Boolean(anchorEl)}
                        onClose={handleSettingsClose}
                    >
                        <MenuItem onClick={handlePropertiesMenu}>Properties</MenuItem>
                    </Menu>

                </div>
            </Toolbar>
        </MuiAppBar>
    );
}
