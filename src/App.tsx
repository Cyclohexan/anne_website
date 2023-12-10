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

//routing
import { useNavigate } from "react-router";
import { Route } from 'react-router';
import mandala from './images/mandala2.png'
import anne_avatar from './images/anne_avatar.png'
import marie_avatar from './images/marie_avatar.png'
import { Avatar, Grid, TextField } from '@mui/material';

//pages
import Contact from './pages/Contact';
import Footer from './pages/Footer';

import vid1 from './images/vid1.mp4';


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
        Anne & Marie
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
        <AppBar component="nav" sx={{ color: textColor, background: 'white', paddingTop: '2vh', paddingBottom: '2vh' }}>
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
              Anne & Marie
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
              display: { xs: 'block', sm: 'none' },
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
              <p style={{ fontSize: '3vh', textAlign: 'center' }}>Hey there! Wir sind Anne und Marie und singen für Ihre Hochzeit mit Klavierbegleitung.</p>
            </div>
          </div>
          <div id="about"
            style={{
              backgroundColor: '#f5e0e5',
              display: 'flex'
            }}>



            <div >
              <div style={{ display: 'flex', justifyContent: 'center', width: '100vw', backgroundColor: 'green' }}>

              </div>




              <div style={{
              marginLeft: '15vw', marginTop: '12.5vh', marginBottom: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '70vw', textAlign: 'center' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid sx={{ p: 15 }} item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30vw', fontSize: '1.5vim', textAlign: 'center' }}>

                    <Avatar alt="vimy Sharp" sx={{ width: "9em", height: "9em" }} src={anne_avatar} />


                  </Grid>
                  <Grid item xs={6} >
                    <div style={{ width: '30vw', fontSize: '2vh' }}>
                      Ich bin Anne und spiele Klavier seit dem ich 4 Jahre alt bin. Bis zu meinem 19. Lebensjahr bekam ich Unterricht und habe in meiner Kindheit vereinzelt an Wettbewerben wie beispielsweise Jungend Musiziert teilgenommen. Heute gehe ich dem Klavierspielen im Rahmen unserer Auftritte als Hobby nach. Ich freue mich, Maries Stimme mit meiner Begleitung zu unterstreichen.
                    </div>

                  </Grid>

                  <Grid item xs={6}>
                    <div style={{ width: '30vw', fontSize: '2vh' }}>
                      Ich bin Marie und die Musik begleitet mich seit ich denken kann. Mit 6 Jahren lernte ich Klavier zu spielen. Zum Gesang kam ich dann in einer Schülerband. Nach der Schule stieg ich bis zum Studium in eine Deutsch-Rock-Band ein.
                      Neben dem Beruf ist es heute ein toller Ausgleich mit Anne zusammen Menschen an ihvim besonderen Tag mit unserer Musik glücklich zu machen.
                    </div>
                  </Grid>
                  <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30vw', fontSize: '1.5vim', textAlign: 'center' }}>
                    <Avatar alt="vimy Sharp" sx={{ width: "9em", height: "9em" }} src={marie_avatar} />
                  </Grid>
                </Grid>
                <div style={{
                   position: 'absolute', 
                  width: '100vw',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <img className="mandala" style={{ width: '40vh', marginLeft: '-20vh' }} src={mandala} />
                  <img className="mandala" style={{ width: '40vh', position: 'absolute', right: '-20vh' }} src={mandala} />
                </div>
              </div>

            </div>

          </div>

          <div id="hearing">
            <Typography style={{paddingTop: '5vh', display: 'flex', justifyContent: 'center' }}
              variant="h3"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Hörprobe
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '60px' }}>
              <video width="320" height="240" controls>
                < source src={vid1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

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