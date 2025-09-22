
// ...existing code...
// @ts-expect-error React is required for test environment
import React, { useState } from 'react';
import { Box, Typography, Link, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
// import { b } from 'framer-motion/client';

const Footer = () => {
  const [careerModalOpen, setCareerModalOpen] = useState(false);

  const handleCareerModalOpen = () => setCareerModalOpen(true);
  const handleCareerModalClose = () => setCareerModalOpen(false);

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
            <Link 
              component="button"
              onClick={handleCareerModalOpen}
              color="#222" 
              underline="hover" 
              fontWeight={500} 
              sx={{ py: 0.5, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }}
            >
              Career Opportunities
            </Link>
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
    
    {/* Career Opportunities Modal */}
    <Dialog
      open={careerModalOpen}
      onClose={handleCareerModalClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { borderRadius: 3, p: 2 } }}
    >
      <DialogTitle sx={{ fontWeight: 700, color: '#1976d2', pr: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>Career Opportunities</span>
        <IconButton
          aria-label="close"
          onClick={handleCareerModalClose}
          sx={{ ml: 2, color: '#888' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ pt: 1, pb: 3 }}>
        <Typography variant="h6" fontWeight={600} color="#222" sx={{ mb: 2 }}>
          Join Our Team
        </Typography>
        <Typography variant="body1" color="#444" sx={{ mb: 2 }}>
          We're always looking for talented individuals to join our growing team. At EdWiseSoft Solutions LLP, 
          you'll work on cutting-edge educational technology projects that make a real impact.
        </Typography>
        <Typography variant="body1" color="#444" sx={{ mb: 2 }}>
          Current opportunities include:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <Typography component="li" variant="body1" color="#444" sx={{ mb: 1 }}>
            Software Developers (React, Node.js, AI/ML)
          </Typography>
          <Typography component="li" variant="body1" color="#444" sx={{ mb: 1 }}>
            UI/UX Designers
          </Typography>
          <Typography component="li" variant="body1" color="#444" sx={{ mb: 1 }}>
            Educational Technology Specialists
          </Typography>
          <Typography component="li" variant="body1" color="#444" sx={{ mb: 1 }}>
            Business Development Associates
          </Typography>
        </Box>
        <Typography variant="body1" color="#444" sx={{ mb: 2 }}>
          <strong>Contact us for more information:</strong>
        </Typography>
        <Typography variant="body1" color="#444" sx={{ mb: 1 }}>
          Email: edwisesoft.com@gmail.com
        </Typography>
        <Typography variant="body1" color="#444">
          Phone: +91 7799132754
        </Typography>
      </DialogContent>
    </Dialog>
  </Box>
  );
};

export default Footer;