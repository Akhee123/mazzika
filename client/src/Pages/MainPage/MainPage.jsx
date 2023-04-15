import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { genres } from '../../assets/constants';
import { Typography } from '@mui/material';

export default function MainPage() {
	const [genre, setGenre] = useState('');

	const handleChange = (event) => {
		setGenre(event.target.value);
	};

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Box sx={{ minWidth: 120 }}>
					<Typography variant="h4" gutterBottom>
						Discovery
					</Typography>
					<FormControl sx={{ minWidth: 120 }}>
						<InputLabel id="genre">Genre</InputLabel>
						<Select
							labelId="genre"
							id="genre"
							value={genre}
							label="Genre"
							onChange={handleChange}>
							{genres.map((genre) => (
								<MenuItem key={genre.value} value={genre.value}>
									{genre.title}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ display: 'flex', flexWrap: 'wrap' }}></Box>
			</Box>
		</>
	);
}
