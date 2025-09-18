
// ...existing code...
import { Box, Typography } from '@mui/material';
// import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BuildIcon from '@mui/icons-material/Build';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const valuePoints = [
  {
    icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: '#1976d2' }} />, 
    title: 'Deep Domain Expertise',
    desc: 'Our team brings decades of experience in education, technology, and enterprise solutions. We understand the challenges organizations face and deliver solutions that actually work.'
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Tailored, Impactful Solutions',
    desc: 'Every organization is unique. We craft products and services customized to your workflows, learning environments, and business goals, ensuring maximum effectiveness.'
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Innovation That Works',
    desc: 'We leverage AI, modern software architecture, and smart design principles to deliver solutions that are not only cutting-edge but practical, intuitive, and future-ready.'
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'End-to-End Partnership',
    desc: 'From planning and implementation to training and ongoing support, we partner with you at every step to ensure seamless adoption and measurable success.'
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Proven Results',
    desc: 'Our solutions have helped educational institutions enhance learning outcomes and enterprises improve operational efficiency, demonstrating tangible value across multiple industries.'
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Integrity and Trust',
    desc: 'Transparency, fairness, and responsible innovation guide every project we undertake, giving you confidence in the solutions we deliver.'
  },
];

const WhyUs = () => (
  <Box
    id="whyus"
    component={motion.section}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    sx={{
      py: 10,
      px: { xs: 2, md: 6 },
  // background removed for global background color
      position: 'relative',
      overflow: 'hidden',
    }}
    aria-label="Why Us Section"
  >
    <Box sx={{ maxWidth: 1100, mx: 'auto', position: 'relative', zIndex: 1 }}>
      <Typography variant="h3" fontWeight={900} color="#1976d2" align="center" sx={{ mb: 1, letterSpacing: 1 }}>
        Why Choose Edwisesoft?
      </Typography>
      <Typography variant="h6" align="center" color="#222" sx={{ mb: 4, fontWeight: 500, opacity: 0.9 }}>
        <b>Empowering Learning, Innovation, and Growth</b>
      </Typography>
      <Typography variant="body1" align="center" color="#444" sx={{ mb: 4, fontSize: 18, maxWidth: 800, mx: 'auto', fontWeight: 400 }}>
        At Edwisesoft, we don’t just build software — we create solutions that transform the way educational institutions and businesses operate. Combining education expertise, technological wisdom, and intelligent software, we deliver products and services that drive real-world impact.
      </Typography>
      <Box sx={{ my: 4 }}>
        <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: 0 }} />
      </Box>
      <Typography variant="h5" fontWeight={700} color="#1976d2" align="center" sx={{ mb: 3, letterSpacing: 0.5 }}>
        What Sets Us Apart
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 4,
          mb: 6,
        }}
      >
        {valuePoints.map((point) => (
          <Box
            key={point.title}
            component={motion.div}
            whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(25,118,210,0.12)' }}
            sx={{
              background: '#fff',
              border: '1.5px solid #e3ecfa',
              borderRadius: 4,
              boxShadow: '0 2px 16px rgba(25,118,210,0.07)',
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: 260,
              position: 'relative',
              transition: 'box-shadow 0.3s, transform 0.3s',
              backdropFilter: 'blur(6px)',
            }}
          >
            <Box sx={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              // background removed for global background color
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
              boxShadow: '0 2px 8px rgba(25,118,210,0.10)',
            }}>
              {point.icon}
            </Box>
            <Typography variant="subtitle1" fontWeight={700} color="#1976d2" align="center" sx={{ mb: 1, fontSize: 20 }}>
              {point.title}
            </Typography>
            <Typography variant="body1" color="#444" align="center" sx={{ fontSize: 16, opacity: 0.95 }}>
              {point.desc}
            </Typography>
          </Box>
        ))}
      </Box>
      

    </Box>
  </Box>
);

export default WhyUs;
