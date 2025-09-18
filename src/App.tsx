
import React, { useMemo } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Container, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
// import Industries from '../sections/Industries';
import WhyUs from '../sections/WhyUs';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import Resources from '../sections/Resources';


function getDesignTokens(mode: 'light' | 'dark') {
  return {
    palette: {
      mode,
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff',
      },
      secondary: {
        main: '#ff9800',
        light: '#ffc947',
        dark: '#c66900',
        contrastText: '#fff',
      },
      ...(mode === 'light'
        ? {
            background: {
              default: '#f0f9ff',
              paper: '#fff',
            },
            text: {
              primary: '#222',
              secondary: '#444',
            },
            divider: '#e3ecfa',
          }
        : {
            background: {
              default: '#181c24',
              paper: '#23293a',
            },
            text: {
              primary: '#f5f7fa',
              secondary: '#b0b8c9',
            },
            divider: '#23293a',
          }),
    },
    typography: {
      fontFamily: 'Inter, Roboto, Arial, sans-serif',
      h1: { fontWeight: 900 },
      h2: { fontWeight: 800 },
      h3: { fontWeight: 800 },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 700 },
  button: { textTransform: 'none' as const, fontWeight: 600 },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 600,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  };
}


function App() {
  const prefersDarkMode = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
  const theme = useMemo(() => createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light')), [prefersDarkMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box component="main" sx={{ pt: 2, minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
        <Container maxWidth={false} disableGutters sx={{ minHeight: '100vh', width: '100vw', px: 0 }}>
          <Hero />
          <About />
          <Services />
          <WhyUs />
          <Resources/>
          <Contact />
          <Footer />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
