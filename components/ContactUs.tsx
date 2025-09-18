

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Typography, TextField, Button, Stack, Paper } from '@mui/material';


const SERVICE_ID = 'service_24xeoor';
const TEMPLATE_ID = 'template_hbz68a6';
const PUBLIC_KEY = 'XQg0KJbtQVnWMHHgO';

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!form.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        alert('Message sent successfully!');
        form.current?.reset();
      })
      .catch(() => {
        alert('Failed to send message. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box id="contact" component="section" sx={{ width: '100%', py: 8 }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: 2 }}>
        <Typography variant="h3" fontWeight={900} color="#1976d2" align="center" sx={{ mb: 1, letterSpacing: 1 }}>
          Let's Connect
        </Typography>
        <Typography variant="h6" align="center" color="#222" sx={{ mb: 3, fontWeight: 500, opacity: 0.9 }}>
          <b>We'd love to hear from you.</b> Reach out for questions, demos, or partnership opportunities.
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
          <Paper elevation={3} sx={{ flex: 1, p: 4, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={600} color="#222" sx={{ mb: 2 }}>
              Get in Touch
            </Typography>
            <form ref={form} onSubmit={sendEmail}>
              <Stack spacing={2}>
                <TextField label="Name" name="from_name" variant="outlined" fullWidth required />
                <TextField label="Email" name="reply_to" variant="outlined" fullWidth required type="email" />
                <TextField label="Contact Number" name="contact_number" variant="outlined" fullWidth required type="tel" />
                <TextField label="Message" name="message" variant="outlined" fullWidth required multiline rows={4} />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, borderRadius: 2 }} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Stack>
            </form>
          </Paper>
          <Box sx={{ flex: 1, p: 4 }}>
            <Typography variant="h6" fontWeight={600} color="#222" sx={{ mb: 2 }}>
              Our Location
            </Typography>
            <Typography variant="body1" color="#444" sx={{ mb: 2 }}>
              EdWiseSoft Solutions LLP<br />
              6008, Trishola Saffron Elite,<br />
             Nallagandla, Hyderabad-500019<br />
              Phone: +91 7799132754<br />
              Email: edwisesoft.com@gmail.com
            </Typography>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
              <iframe
                title="Company Location"
                src="https://www.google.com/maps?q=6008%2C%20Trishola%20Saffron%20Elite%2C%20Nallagandla%2C%20Hyderabad-500019&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactUs;
