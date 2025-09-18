import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const navItems = [
	{ label: 'Home', href: '#hero' },
	{ label: 'About', href: '#about' },
	{ label: 'Services', href: '#services' },
	{ label: 'Why Us', href: '#whyus' },
	{ label: 'Resources', href: '#resources' },
	{ label: 'Contact', href: '#contact' },
];



const Navbar = () => (
	<AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: '#fff' }}>
					<Toolbar disableGutters sx={{ minHeight: 90, px: 0 }}>
						<Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
							<Button
								href="#hero"
								   sx={{ fontWeight: 900, fontSize: 26, color: '#1976d2', textTransform: 'none', minWidth: 0, pl: '20px', pr: 3 }}
							>
								EdWiseSoft Solutions LLP
							</Button>
							<Box sx={{ flexGrow: 1 }} />
									<Box sx={{ display: 'flex', pr: '20px' }}>
										   {navItems.map((item) => (
											   <Button
												   key={item.label}
												   href={item.href}
												   sx={{ color: '#374151', mx: 0.75, fontWeight: 700, fontSize: 16 }}
											   >
												   {item.label}
											   </Button>
										   ))}
									</Box>
						</Box>
		</Toolbar>
	</AppBar>
);

export default Navbar;
