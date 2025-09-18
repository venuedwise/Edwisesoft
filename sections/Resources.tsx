import React from 'react';
import { Box, Typography, Tabs, Tab, Card, Button, Chip } from '@mui/material';
import { useState } from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { motion } from 'framer-motion';

const resources = [
  // Blogs & Articles
  {
    category: 'Blogs',
    icon: <ArticleIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'AI in Modern Classrooms',
    desc: 'Discover how artificial intelligence is transforming education, enabling personalized learning experiences, and helping educators make data-driven decisions for every student.',
    link: '#',
  },
  {
    category: 'Blogs',
    icon: <AutoAwesomeIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'Digital Learning Best Practices',
    desc: 'Learn actionable strategies for creating engaging online courses, boosting student participation, and improving learning outcomes in digital environments.',
    link: '#',
  },
  {
    category: 'Blogs',
    icon: <BuildCircleIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'Emerging Technology Trends in Enterprises',
    desc: 'Stay ahead of the curve with insights on how AI, automation, and smart software are reshaping workflows and business operations across industries.',
    link: '#',
  },
  // Case Studies
  {
    category: 'Case Studies',
    icon: <SchoolIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'LMS Implementation Success',
    desc: 'See how a leading university adopted our LMS to streamline course management, improve student engagement, and track performance metrics effectively.',
    link: '#',
  },
  {
    category: 'Case Studies',
    icon: <AutoAwesomeIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'AI-Powered Assessment Impact',
    desc: 'Discover how our AI-driven assessment tools helped a training institute reduce grading time by 50% while providing actionable insights to enhance learning outcomes.',
    link: '#',
  },
  {
    category: 'Case Studies',
    icon: <BuildCircleIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'Virtual Classroom Transformation',
    desc: 'Explore how an educational organization shifted to fully interactive virtual classrooms, improving student participation and satisfaction rates significantly.',
    link: '#',
  },
  // Guides & Tutorials
  {
    category: 'Guides',
    icon: <FolderSpecialIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'Effective Virtual Classrooms: A Step-by-Step Guide',
    desc: 'Learn best practices to set up engaging, interactive online classrooms that maximize learning outcomes and student participation.',
    link: '#',
  },
  {
    category: 'Guides',
    icon: <SchoolIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'Streamlining Course Management with LMS',
    desc: 'Step-by-step guide to efficiently organize courses, assignments, and assessments while tracking progress in a modern LMS environment.',
    link: '#',
  },
  {
    category: 'Guides',
    icon: <AutoAwesomeIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'Leveraging AI for Smarter Learning',
    desc: 'A practical guide for educators and institutions on integrating AI tools to personalize learning and improve student performance.',
    link: '#',
  },
  // Tools & Templates
  {
    category: 'Tools',
    icon: <BuildCircleIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'Customizable Assessment Template',
    desc: 'Download our free, easy-to-use assessment template to streamline testing and grading for students or employees.',
    link: '#',
  },
  {
    category: 'Tools',
    icon: <FolderSpecialIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'Digital Learning Checklist',
    desc: 'A comprehensive checklist for educators and trainers to ensure effective course creation, delivery, and evaluation.',
    link: '#',
  },
  {
    category: 'Tools',
    icon: <TrendingUpIcon sx={{ fontSize: 38, color: '#1976d2' }} />, 
    title: 'Workflow Optimization Planner',
    desc: 'A practical tool for institutions and enterprises to plan, automate, and optimize operational and learning workflows.',
    link: '#',
  },
];

const categories = ['All', 'Blogs', 'Case Studies', 'Guides', 'Tools'];

export default function Resources() {
  const [tab, setTab] = useState('Blogs');
  const filtered = tab === 'All' ? resources : resources.filter(r => r.category === tab);

  return (
  <Box id="resources" sx={{ py: 10, px: { xs: 2, md: 6 }, minHeight: '100vh' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h3" fontWeight={900} color="#1976d2" align="center" sx={{ mb: 1, letterSpacing: 1 }}>
          Resources & Insights
        </Typography>
        <Typography variant="h6" align="center" color="#222" sx={{ mb: 4, fontWeight: 500, opacity: 0.9 }}>
          <b>Explore our curated guides, case studies, and tools to stay ahead in education and technology.</b>
        </Typography>
        <Box sx={{ my: 3 }}>
          <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: 0 }} />
        </Box>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          centered
          sx={{ mb: 5, '.MuiTab-root': { fontWeight: 700, fontSize: 18, color: '#1976d2' } }}
        >
          {categories.map(cat => (
            <Tab key={cat} value={cat} label={cat} />
          ))}
        </Tabs>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 4,
            mb: 6,
          }}
        >
          {filtered.map((r) => (
            <Card
              key={r.title}
              component={motion.div}
              whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(25,118,210,0.12)' }}
              elevation={4}
              sx={{
                borderRadius: 4,
                p: 3,
                minHeight: 260,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                // background removed for global background color
                border: '1.5px solid #e3ecfa',
                boxShadow: '0 2px 16px rgba(25,118,210,0.07)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                backdropFilter: 'blur(6px)',
              }}
            >
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: '50%', boxShadow: '0 2px 8px rgba(25,118,210,0.10)' }}>
                {r.icon}
              </Box>
              <Chip label={r.category} size="small" sx={{ mb: 1, fontWeight: 700, color: '#1976d2' }} />
              <Typography variant="h6" fontWeight={700} color="#1976d2" sx={{ mb: 1 }}>
                {r.title}
              </Typography>
              <Typography variant="body1" color="#444" sx={{ mb: 2, fontSize: 16, opacity: 0.95 }}>
                {r.desc}
              </Typography>
              <Button variant="outlined" color="primary" sx={{ mt: 'auto', fontWeight: 700, borderRadius: 2 }}>
                Read More
              </Button>
            </Card>
          ))}
        </Box>
    
      </Box>
    </Box>
  );
}
