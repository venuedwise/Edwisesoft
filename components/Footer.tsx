
// ...existing code...
import { Box, Typography, Link, IconButton, Modal, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// import { b } from 'framer-motion/client';


import { useState } from 'react';

const Footer = () => {
  const [careerOpen, setCareerOpen] = useState(false);
  return (
    <Box component="footer" sx={{ width: '100%', bgcolor: '#f5f7fa', borderTop: '1.5px solid #e3ecfa', pt: 7, pb: 2 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: { xs: 4, md: 0 }, mb: 3 }}>
          {/* Left Side */}
          <Box sx={{ flex: 1, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h5" fontWeight={900} color="#1976d2" sx={{ letterSpacing: 0.5, mb: 0.5 }}>
              EdWiseSoft Solutions LLP
            </Typography>
            <Typography variant="body1" color="#141010ff" sx={{ mb: 1, fontWeight: 500 }}>
              <b>Empowering Education Through Technology.</b>
            </Typography>
          </Box>
          {/* Right Side */}
          <Box sx={{ flex: 1, minWidth: 320, display: 'flex', flexDirection: 'row', justifyContent: { xs: 'flex-start', md: 'center' }, gap: { xs: 6, md: 10 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 120 }}>
              <Typography variant="subtitle1" fontWeight={900} color="#1976d2" sx={{ fontSize: 22 }}>
                Quick Links
              </Typography>
              <Box sx={{ width: 40, height: 3, bgcolor: '#1976d2', borderRadius: 2, mb: 1 }} />
              <Link href="/#about" color="#222" underline="hover" fontWeight={500} sx={{ py: 0.5 }}>About Us</Link>
              <Link href="/#services" color="#222" underline="hover" fontWeight={500} sx={{ py: 0.5 }}>Services</Link>
              <Link href="/#resources" color="#222" underline="hover" fontWeight={500} sx={{ py: 0.5 }}>Resources</Link>
              <Link href="/#contact" color="#222" underline="hover" fontWeight={500} sx={{ py: 0.5 }}>Contact</Link>
              <Link href="#" onClick={e => { e.preventDefault(); setCareerOpen(true); }} color="#222" underline="hover" fontWeight={500} sx={{ py: 0.5, cursor: 'pointer' }}>Careers</Link>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 160 }}>
              <Typography variant="subtitle1" fontWeight={700} color="#1976d2" sx={{ fontSize: 22 }}>
                Connect With Us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mb: 1 }}>
                <IconButton aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61579872715821" target="_blank" color="primary" sx={{ bgcolor: '#fff', border: '1px solid #c3cfe2', p: 1 }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/edwisesoft-solutions-8b581b380/" target="_blank" color="primary" sx={{ bgcolor: '#fff', border: '1px solid #c3cfe2', p: 1 }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="Instagram" href="https://instagram.com/edwisesoft" target="_blank" color="primary" sx={{ bgcolor: '#fff', border: '1px solid #c3cfe2', p: 1 }}>
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Modal open={careerOpen} onClose={() => setCareerOpen(false)} aria-labelledby="career-modal-title" aria-describedby="career-modal-description">
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 4, minWidth: 320 }}>
          <Typography id="career-modal-title" variant="h6" fontWeight={700} color="#1976d2" gutterBottom>
            Career Opportunities
          </Typography>
          <Typography id="career-modal-description" sx={{ mb: 2 }}>
            Interested candidates can reach out to us through our email <a href="mailto:edwisesoft.com"><b>edwisesoft.com</b></a> or contact us through this number <b>[+91 7799132754]</b>.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => setCareerOpen(false)}>
            Close
          </Button>
        </Box>
      </Modal>
      <Box sx={{ borderTop: '1px solid #e3ecfa', mt: 4, pt: 2, pb: 1, px: { xs: 2, md: 4 }, textAlign: 'center' }}>
        <Typography variant="body2"  sx={{ fontSize: 14, mb: 0.5 }}>
          <b>© 2025 EdWiseSoft Solutions LLP. All Rights Reserved.</b>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 0.5 }}>
          <Link href="/privacy-policy"  underline="hover" sx={{ fontSize: 14 }}><b>Privacy Policy</b></Link>
          <Typography  sx={{ fontSize: 14 }}>|</Typography>
          <Link href="/terms-of-service"  underline="hover" sx={{ fontSize: 14 }}><b>Terms of Service</b></Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;