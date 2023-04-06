import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useState } from 'react';

function MusicPlayer() {
	const [value, setValue] = useState(30);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					backgroundColor: 'primary.light',
					bottom: 0,
					position: 'fixed',
					width: '100%',
				}}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography component="div" variant="h5">
							Live From Space
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div">
							Mac Miller
						</Typography>
					</CardContent>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						pl: 1,
						pt: 1,
						pb: 1,
					}}>
					<IconButton aria-label="previous">
						<SkipPreviousIcon />
					</IconButton>
					<IconButton aria-label="play/pause">
						<PlayArrowIcon sx={{ height: 38, width: 38 }} />
					</IconButton>
					<IconButton aria-label="next">
						<SkipNextIcon />
					</IconButton>
				</Box>
				<Stack
					spacing={2}
					direction="row"
					sx={{ mb: 1, width: 200, pr: 2 }}
					alignItems="center">
					<VolumeDown />
					<Slider
						aria-label="Volume"
						value={value}
						onChange={handleChange}
					/>
					<VolumeUp />
				</Stack>
			</Box>
		</>
	);
}

export default MusicPlayer;
