import { Box, Container,TextField, Button, Typography, Menu, MenuItem } from "@mui/material";
import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import { Container, Menu, MenuItem, Button } from '@mui/material';
import image from "../assets/Flag2png.png";
import { cyan } from "@mui/material/colors";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import "@fontsource/bricolage-grotesque"; // Defaults to weight 400
import "@fontsource/bricolage-grotesque/600.css";
import "../App.css";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export function LoginPage() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const primary = cyan[900];
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1, minWidth: 1530 }}>
            <Container sx={{ minWidth: 1400, display: "flex", flexDirection: "row", justifyContent: "space-between", height: 55, margin: "auto" }}>
                <img src={image} alt="picture" style={{ width: 80, height: 33, marginTop: 11 }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ p: 1.5 }}
                    color={primary}
                >
                    Ozbekiston Respublikasi Universitetlari
                </Typography>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ border: "none", ml: 13, color: primary }}
                >
                    Biz qaqqimizda
                </Button>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ border: "none", color: primary }}
                >
                    Karera
                </Button>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ border: "none", color: primary }}
                >
                    Programmalar
                </Button>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ border: "none", color: primary }}
                >
                    Kontaktlar
                </Button>
                <Menu
                    id="fade-menu"
                    slotProps={{
                        list: {
                            'aria-labelledby': 'fade-button',
                        },
                    }}
                    // slots={{ transition: Fade }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <Button style={{ marginTop: 2.2, marginLeft: 10 }}><ExitToAppIcon />Kirish</Button>
            </Container>
            <AppBar position="static" sx={{ height: 52, backgroundColor: primary }} >
                <Toolbar sx={{ position: "absolute", right: 23 }} >
                    <Search sx={{ mb: 1.4, minWidth: 480, height: 30, backgroundColor: "white", display: "flex", alignItems: "flex-start", }}>
                        <SearchIconWrapper >
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase sx={{ color: "grey", backgroundColor: "white", height: 31, borderRadius: 1.5 }}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
            <Container style={{ width: 360, display: "flex", flexDirection: "column", gap: 10, border: 3, borderColor: "black"  }}
                className="login-form">
                <Typography variant="h5" style={{ marginTop: 18, color: "gray", textAlign: "center" }}>Войти</Typography>
                <TextField variant="standard" label="Username" />
                <TextField variant="outlined" label="Email" type="email" />
                <TextField variant="filled" label="Password" type="password" />
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    style={{ borderRadius: 10 }}
                // disabled={loading || isSubmitting}
                // startIcon={loading ? <CircularProgress size={18} /> : undefined}
                >Kirish
                    {/* {loading ? "Входим..." : "Войти"} */}
                </Button>
            </Container>
        </Box>
    );

};