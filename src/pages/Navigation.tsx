import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../App.css';
import Logo from '../images/logo.jpeg';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Drawer, Link } from '@mui/material';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    onlyHome?: boolean;
}

const drawerWidth = 240;

const navToSection = function (element: any) {
    document.getElementById(element.key)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
const textColor = "black";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Dancing Script',
        ].join(','),
        button: {
            textTransform: 'none' //prevent button from displaying text in upper case
        }
    }
});

function Navigation(props: Props) {

    const navItems = props.onlyHome ? 
    []
        :
    [{
        text: "Home",
        key: "home"
    }, {
        text: "Über Uns",
        key: "about"
    }, {
        text: "Hörprobe",
        key: "hearing"
    }, {
        text: "Auswahl an Liedern",
        key: "songs"
    }, {
        text: "Kontakt",
        key: "contact"
    }];

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Marie & Anne
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.key} disablePadding>
                        <ListItemButton onClick={function () { navToSection(item) }} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <ThemeProvider theme={theme} >
            <AppBar component="nav" sx={{ color: textColor, background: 'white' }}>
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{ p: 1, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link href="/"><img src={Logo} width="150px" /></Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (

                            <Button key={item.key} sx={{ fontSize: "2rem", paddingLeft: '3vw', color: textColor }} onClick={function () { navToSection(item) }}>
                                {item.text}
                            </Button>

                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </ThemeProvider>
    );
};

export default Navigation;