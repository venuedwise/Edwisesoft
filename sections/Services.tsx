function ProductCards({ products }) {
  const [openIdx, setOpenIdx] = React.useState(null);

  const handleOpen = (idx) => setOpenIdx(idx);
  const handleClose = () => setOpenIdx(null);

  return (
    <Box>
      {/* Product cards row */}
      <Box sx={{ display: 'flex', gap: 4, overflowX: 'auto', mb: 2, pb: 1, px: 1, scrollbarWidth: 'thin', maxWidth: '100%' }}>
        {products.map((product, idx) => (
          <Card key={product.title} component={motion.div} whileHover={{ scale: 1.05 }} elevation={4}
            sx={{ minWidth: 320, maxWidth: 340, borderRadius: 3, minHeight: 260, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, flex: '0 0 auto', position: 'relative' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, mt: 1 }}>
              {idx === 0 && <SchoolIcon sx={{ fontSize: 40, color: '#1976d2' }} />}
              {idx === 1 && <AutoGraphIcon sx={{ fontSize: 40, color: '#1976d2' }} />}
              {idx === 2 && <InsightsIcon sx={{ fontSize: 40, color: '#1976d2' }} />}
              {idx === 3 && <SupportAgentIcon sx={{ fontSize: 40, color: '#1976d2' }} />}
              {idx === 4 && <BuildCircleIcon sx={{ fontSize: 40, color: '#1976d2' }} />}
            </Box>
            <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 0 }}>
              <Typography variant="h6" fontWeight={700} color="#1976d2" sx={{ mb: 1 }}>
                {product.title}
              </Typography>
              <Typography variant="body1" color="#444" sx={{ fontSize: 16, opacity: 0.9, mb: 1 }}>
                {product.desc}
              </Typography>
            </CardContent>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 'auto', mb: 1 }}>
              <Button
                endIcon={<span style={{ fontSize: 20, marginLeft: 4 }}>&#8594;</span>}
                size="small"
                sx={{ color: '#1976d2', fontWeight: 700, textTransform: 'none', minWidth: 120, justifyContent: 'center', fontSize: 16, pl: 0 }}
                onClick={() => handleOpen(idx)}
                aria-label={`Learn more about ${product.title}`}
              >
                Learn More
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
      {/* Modal dialog */}
      <Dialog
        open={openIdx !== null}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        aria-labelledby="product-dialog-title"
        PaperProps={{ sx: { borderRadius: 3, p: 2 } }}
      >
        <DialogTitle id="product-dialog-title" sx={{ fontWeight: 700, color: '#1976d2', pr: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>{openIdx !== null && products[openIdx].title}</span>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ ml: 2, color: '#888' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 1, position: 'relative', pb: 7 }}>
          {openIdx !== null && (
            <Box>
              {products[openIdx].more.split(/\n|⸻/).map((para, i) => {
                // Section heading: bold and colored
                if (/^(How It Works|Key Benefits|What It Does|Applications|How It Helps|Key Features|What It Offers|Our Approach|Key Advantages)$/i.test(para.trim())) {
                  return (
                    <Typography key={i} variant="subtitle1" sx={{ color: '#222', fontWeight: 700, mt: 3, mb: 1, fontSize: 18 }}>
                      {para.trim()}
                    </Typography>
                  );
                }
                // Bulleted list
                if (/^• /.test(para.trim())) {
                  return (
                    <Typography key={i} component="li" variant="body1" color="#444" sx={{ mb: 1, ml: 2, fontWeight: 400, listStyle: 'disc', pl: 1 }}>
                      {para.trim().replace(/^• /, '')}
                    </Typography>
                  );
                }
                // Section divider
                if (/^[-–—⸻]+$/.test(para.trim())) {
                  return <Box key={i} sx={{ my: 2 }}><hr style={{ border: 'none', borderTop: '1.5px solid #e0e0e0', margin: 0 }} /></Box>;
                }
                // Default paragraph
                return (
                  <Typography key={i} variant="body1" color="#444" sx={{ mb: 2, whiteSpace: 'pre-line', fontSize: 16, fontWeight: 400 }}>
                    {para.trim()}
                  </Typography>
                );
              })}
              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
                sx={{ position: 'absolute', right: 24, bottom: 16, minWidth: 100, fontWeight: 600, borderRadius: 2, boxShadow: 1 }}
              >
                Close
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import InsightsIcon from '@mui/icons-material/Insights';
import SchoolIcon from '@mui/icons-material/School';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import { motion } from 'framer-motion';


const products = [
  {
    title: 'AALS (Agentic AI Learning System)',
    desc: 'Experience the next generation of education with AALS—an Agentic AI Learning System that personalizes, automates, and elevates every aspect of teaching and learning. AALS adapts to each learner, provides intelligent content delivery, and empowers educators with actionable insights.',
    more: `How It Works\nAALS leverages advanced AI agents to create dynamic learning paths, automate routine tasks, and provide real-time feedback. Teachers can design adaptive courses, deploy interactive content, and monitor student progress with intelligent dashboards. Students benefit from personalized recommendations, instant support, and engaging, AI-driven experiences.\n\nKey Benefits\n• Personalized Learning: AI agents tailor content and pace for every student.\n• Automated Administration: Streamline grading, scheduling, and communication.\n• Intelligent Analytics: Deep insights into engagement, mastery, and growth.\n• Scalable & Secure: Robust for institutions of any size, with enterprise-grade security.`
  },
  {
    title: 'AI-Powered Assessments',
    desc: 'Intelligent Evaluation for Smarter Learning. Transform how educators assess and understand student performance with AI-driven evaluations.',
    more: `What It Does\nOur system automatically generates adaptive assessments, grades assignments, and analyzes results to provide actionable insights. AI identifies knowledge gaps, highlights strengths, and suggests personalized learning paths for every student.\n\nApplications\n• Adaptive Testing: Tailors difficulty based on individual performance.\n• Immediate Feedback: Students and teachers receive instant performance insights.\n• Personalized Learning Paths: Recommend lessons or exercises based on results.\n• Data-Driven Decisions: Enable targeted interventions and improved outcomes.`
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Unlock Insights, Drive Results. Turn complex data into clear, actionable insights. Our Analytics Dashboard empowers educators and administrators to make informed decisions quickly.',
    more: `How It Helps\nVisualize engagement, progress, and outcomes across classrooms or institutions. For enterprises, track performance, usage, and workflow efficiency with intuitive, real-time dashboards.\n\nKey Benefits\n• Real-Time Metrics: Monitor key indicators as they happen.\n• Custom Reports: Focus on the insights that matter most.\n• Multi-Platform Integration: Aggregate data from LMS, assessments, and other tools.\n• Informed Decisions: Use actionable insights to improve learning or business results.`
  },
  {
    title: 'Virtual Classrooms',
    desc: 'Learning Without Boundaries. Deliver interactive, live lessons anywhere with secure and feature-rich virtual classrooms.',
    more: `What It Offers\nTeachers host live sessions, share screens, run polls, and assign collaborative projects. Students participate in discussions, join breakout rooms, and access session recordings anytime, ensuring uninterrupted learning.\n\nKey Features\n• Live Engagement: Audio, video, and chat for real-time interaction.\n• Breakout Collaboration: Small group discussions and teamwork activities.\n• Interactive Tools: Whiteboards, polls, and shared documents.\n• Secure & Reliable: End-to-end encryption and robust session management.`
  },
  {
    title: 'Custom Enterprise Tools',
    desc: 'Solutions Built for Your Needs. When off-the-shelf software isn’t enough, we create tools that solve your unique operational challenges across education and enterprise.',
    more: `Our Approach\nWe work closely with your team to understand workflows, identify challenges, and design solutions that improve efficiency, automate tasks, and drive measurable results. Each tool is tailored for your organization’s goals and future growth.\n\nKey Advantages\n• Tailored Solutions: Built to match your organization’s exact requirements.\n• Efficiency & Automation: Streamline operations and reduce manual effort.\n• Scalable & Flexible: Adaptable to growing needs and evolving processes.\n• Cross-Industry Applications: Suitable for education, business, and beyond.`
  },
];

const services = [
  {
    title: 'Implementation & Training',
    desc: 'Expert onboarding, training, and support to ensure smooth adoption and success.'
  },
  {
    title: 'Content Digitization',
    desc: 'Transform traditional materials into engaging, interactive digital content.'
  },
  {
    title: 'Performance Insights',
    desc: 'Actionable analytics and reporting to drive continuous improvement.'
  },
  {
    title: 'Custom Software Development',
    desc: 'Bespoke software solutions built to your exact requirements.'
  },
  {
    title: 'AI & Automation',
    desc: 'Integrate intelligent automation to streamline processes and boost productivity.'
  },
  {
    title: 'Consulting & Strategy',
    desc: 'Guidance and planning to maximize technology ROI and achieve your vision.'
  },
  {
    title: 'Support & Maintenance',
    desc: 'Ongoing technical support and maintenance for peace of mind.'
  },
];

const Services = () => (
  <Box
    id="services"
    component={motion.section}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  sx={{ py: 10, px: { xs: 2, md: 6 } }}
    aria-label="Services Section"
  >
    <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h3" fontWeight={900} color="#1976d2" align="center" sx={{ mb: 1, letterSpacing: 1 }}>
        What We Offer
      </Typography>
      <Typography variant="h6" align="center" color="#222" sx={{ mb: 6, fontWeight: 500, opacity: 0.85 }}>
        <b>Innovative products and expert services to empower education and enterprise success.</b>
      </Typography>

      {/* Products Cluster */}
      <Typography variant="h5" fontWeight={700} color="#1976d2" sx={{ mb: 3, letterSpacing: 0.5 }} align="center">
        Our Products
      </Typography>
  <ProductCards products={products} />

      {/* Services Cluster */}
      <Typography variant="h5" fontWeight={700} color="#1976d2" sx={{ mb: 3, letterSpacing: 0.5 }} align="center">
        Our Services
      </Typography>
      <Box sx={{ display: 'flex', gap: 4, overflowX: 'auto', pb: 1, px: 1, scrollbarWidth: 'thin', maxWidth: '100%' }}>
        {services.map((service, idx) => (
          <Card key={service.title} component={motion.div} whileHover={{ scale: 1.05 }} elevation={4}
            sx={{ minWidth: 320, maxWidth: 340, borderRadius: 3, minHeight: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, flex: '0 0 auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, mt: 1 }}>
              {idx === 0 && <SupportAgentIcon sx={{ fontSize: 36, color: '#1976d2' }} />}
              {idx === 1 && <AutoGraphIcon sx={{ fontSize: 36, color: '#1976d2' }} />}
              {idx === 2 && <InsightsIcon sx={{ fontSize: 36, color: '#1976d2' }} />}
              {idx === 3 && <BuildCircleIcon sx={{ fontSize: 36, color: '#1976d2' }} />}
              {idx === 4 && <SchoolIcon sx={{ fontSize: 36, color: '#1976d2' }} />}
            </Box>
            <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 0 }}>
              <Typography variant="h6" fontWeight={700} color="#1976d2" sx={{ mb: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="#444" sx={{ fontSize: 16, opacity: 0.9 }}>
                {service.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Typography variant="subtitle1" align="center" sx={{ mt: 7, fontWeight: 500, color: '#1976d2', letterSpacing: 0.5 }}>
        Ready to transform learning and business? <b>Partner with Edwisesoft for future-ready solutions.</b>
      </Typography>
    </Box>
  </Box>
);

export default Services;
