//components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

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

import Songs from './pages/Songs';

import { mobileCheck } from './util/mobileCheck';
import Navigation from './pages/Navigation';

const desktop = !mobileCheck();

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

export default function DrawerAppBar() {
  return (
    <ThemeProvider theme={theme} >
      <Navigation />
      <Box sx={{ overflowX: 'hidden', display: 'flex' }}>
        <CssBaseline />
        <Box component="main" sx={{ overflow: 'hidden' }}>
          <div id="home">
            <Slideshow></Slideshow>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', left: '0', bottom: '0', height: '20vh', width: '100%', backgroundColor: 'white' }}>
              <p style={{ fontSize: desktop ? '2rem' : '1.5rem', textAlign: 'center' }}>Wir sind Marie und Anne. Wir singen mit Klavierbegleitung für Ihre Hochzeit, Taufe oder andere Feierlichkeiten.</p>
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

          <div id="songs">
            <Songs/>
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