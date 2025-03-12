import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
	const [bgColor, setBgColor] = useState('white');

	useEffect(() => {
		if (darkMode) {
			setBgColor('#292929');
		} else {
			setBgColor('#000');
		}
	}, [darkMode]);

	return (
		<Box sx={{ backgroundColor: bgColor, padding: '40px 20px' }}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={4}>
					<Typography color={darkMode ? "rgb(176, 176, 176)" : "white"}  variant="h6" gutterBottom>
						Company Address
					</Typography>
					<Typography color={darkMode ? "rgb(176, 176, 176)" : "white"} variant="body1">
						1234 Street Name<br />
						City, State, 12345<br />
						Country
					</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography  color={darkMode ? "rgb(176, 176, 176)" : "white"} variant="h6" gutterBottom>
						Follow Us
					</Typography>
					<Box sx={{ display: 'flex', gap: '10px' }}>
						<Facebook />
						<Twitter />
						<Instagram />
						<LinkedIn />
					</Box>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography  variant="h6"  color={darkMode ? "rgb(176, 176, 176)" : "white"} gutterBottom>
						Contact Us
					</Typography>
					<Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
						<TextField 
							label="Email" 
							variant="outlined" 
							fullWidth 
							sx={{ 
								'& .MuiInputLabel-root': {
									color: 'white',
								},
								'& .MuiOutlinedInput-root': {
									'& fieldset': {
										borderColor: 'white',
									},
									'&:hover fieldset': {
										borderColor: 'white',
									},
									'&.Mui-focused fieldset': {
										borderColor: 'white',
									},
								},
							}} 
						/>
						<TextField 
							label="Message" 
							variant="outlined" 
							fullWidth 
							multiline 
							rows={4} 
							sx={{ 
								'& .MuiInputLabel-root': {
									color: 'white',
								},
								'& .MuiOutlinedInput-root': {
									'& fieldset': {
										borderColor: 'white',
									},
									'&:hover fieldset': {
										borderColor: 'white',
									},
									'&.Mui-focused fieldset': {
										borderColor: 'white',
									},
								},
								color: 'grey'
							}} 
						/>
						<Button 
							variant="contained" 
							sx={{ 
								backgroundColor:darkMode ? "rgb(176, 176, 176)" : "white", 
								color: 'black', 
								fontSize: '0.875rem', 
								padding: '6px 12px',
								'&:hover': {
									backgroundColor: 'rgba(255, 255, 255, 0.8)',
								},
							}}
						>
							Send
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
