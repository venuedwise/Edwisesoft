// @ts-expect-error: React is required for test environment
import React from 'react';

// ...existing code...
// ...existing code...
import { Box, Typography, Divider, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => (
  <Box
    id="about"
    component={motion.section}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  sx={{ py: 10, px: 2 }}
    aria-label="About Section"
  >
  <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h3" fontWeight={900} color="#1976d2" sx={{ mb: 0.5, letterSpacing: 2, textShadow: '0 2px 8px rgba(25,118,210,0.10)' }}>
        About EdWiseSoft
      </Typography>
      <Divider sx={{ mb: 2, mx: 'auto', width: 90, borderColor: '#1976d2', borderBottomWidth: 4, borderRadius: 2 }} />
      <Typography variant="h5" color="#222" fontWeight={700} sx={{ mb: 3, letterSpacing: 0.5, fontStyle: 'italic', textShadow: '0 1px 4px rgba(25,118,210,0.06)' }}>
        Empowering learners, educators, and institutions to unlock their true potential through technology.
      </Typography>
      <Stack spacing={2} sx={{ mb: 1 }}>
        <Typography variant="body1" color="#444" sx={{ fontSize: 18, lineHeight: 1.8 }}>
          <b style={{ color: '#1976d2', fontWeight: 700, fontSize: 19 }}>At EdWiseSoft, we’re more than just software developers;</b> we’re education partners passionate about reimagining learning for the digital age.<br /><br />
          Founded on the belief that <span style={{ color: '#1976d2', fontWeight: 700 }}>education, wisdom, and software</span> should work together, we build solutions that make learning smarter, engaging, and accessible for all.<br /><br />
          <span style={{ color: '#1976d2', fontWeight: 700, fontSize: 17 }}>Our philosophy is simple:</span> start with the learner, not the technology. Every solution we design is grounded in real educational needs and delivers measurable outcomes.
        </Typography>
        <Divider sx={{ width: 60, mx: 'auto', borderColor: '#1976d2', borderBottomWidth: 2, opacity: 0.2 }} />
        <Typography variant="body1" color="#444" sx={{ fontSize: 18, lineHeight: 1.8 }}>
          Our team is a diverse mix of educators, technologists, and innovators who have spent years solving challenges in schools, universities, and training organizations.<br />
          We believe in a <span style={{ color: '#1976d2', fontWeight: 700 }}>collaborative approach</span>, working alongside institutions to integrate technology seamlessly into their classrooms and campuses.
        </Typography>
        <Divider sx={{ width: 60, mx: 'auto', borderColor: '#1976d2', borderBottomWidth: 2, opacity: 0.2 }} />
        <Typography variant="body1" color="#444" sx={{ fontSize: 18, lineHeight: 1.8 }}>
          We’re also deeply committed to <span style={{ color: '#1976d2', fontWeight: 700 }}>responsible innovation</span> — ensuring that our platforms are secure, inclusive, and adaptable to different learning environments.<br />
          At Edwisesoft, we’re not just creating software; <b style={{ color: '#1976d2', fontWeight: 700 }}>we’re shaping the future of education.</b>
        </Typography>
      </Stack>
    </Box>
  </Box>
);

export default About;
