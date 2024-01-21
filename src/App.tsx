//components
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css'

//custom pages
import Slideshow from './components/Slideshow'

//theming
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

//pages
import Contact from './pages/Contact';
import Footer from './pages/Footer';


import About from './pages/About';
import Hearings from './pages/Hearings';


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

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [{
  text: "Home",
  key: "home"
}, {
  text: "Über Uns",
  key: "about"
}, {
  text: "Hörprobe",
  key: "hearing"
}, {
  text: "Kontakt",
  key: "contact"
}];

const textColor = "black";

const navToSection = function (element: any) {
  document.getElementById(element.key)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme} >
      <Box sx={{ overflowX: 'hidden', display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ color: textColor, background: 'white'}}>
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
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Marie & Anne
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.key} sx={{ fontSize: "3vh", paddingLeft: '3vw', color: textColor }} onClick={function () { navToSection(item) }}>
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
        <Box component="main" sx={{ overflow: 'hidden' }}>
          <div id="home">
            <Slideshow></Slideshow>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', left: '0', bottom: '0', height: '20vh', width: '100%', backgroundColor: 'white' }}>
              <p style={{ fontSize: '3vh', textAlign: 'center' }}>Wir sind Marie und Anne. Wir singen mit Klavierbegleitung für Ihre Hochzeit, Taufe oder andere Feierlichkeiten.</p>
            </div>
          </div>
          <div id="about"
            style={{
              backgroundColor: '#CFF0CC',
              display: 'flex'
            }}>

            <About/>
  
          </div>

          <div id="hearing">
            <Hearings/>
          </div>

          <div id="contact" style={{  background: 'white' }}>
            <Contact />
            <Footer />
          </div>

        </Box>
      </Box>
    </ThemeProvider>
  );
}