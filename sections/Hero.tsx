
// ...existing code...
import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => (
  <Box
    id="hero"
    component={motion.section}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    sx={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  // background removed for global background color
      px: { xs: 2, md: 0 },
      py: { xs: 8, md: 0 },
      textAlign: 'center',
    }}
    aria-label="Hero Section"
  >
    <Typography
      variant="h2"
      component="h1"
      fontWeight={700}
      color="#222"
      sx={{ mb: 2, fontSize: { xs: '2.2rem', md: '3.5rem' } }}
    >
      Empowering Education Through Technology
    </Typography>
    <Typography
      variant="h5"
      component="h2"
      color="#444"
      sx={{ mb: 4, fontSize: { xs: '1.1rem', md: '1.7rem' } }}
    >
      EdWiseSoft Services - Bridging learning and innovation with software intelligence.
    </Typography>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
      <Button
        variant="contained"
        color="primary"
        size="large"
        aria-label="Get Started"
        sx={{ borderRadius: 8, px: 4, fontWeight: 600 }}
        href="#about"
      >
        Get Started
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        aria-label="Explore Services"
        sx={{ borderRadius: 8, px: 4, fontWeight: 600 }}
        href="#services"
      >
        Explore Services
      </Button>
    </Stack>
  </Box>
);

export default Hero;
