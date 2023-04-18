import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import TopPlay from '../components/TopPlay/TopPlay';
import { Box } from '@mui/material';

function Root() {
	return (
		<>
			<NavBar />
			<Box sx={{ display: 'flex', flexDirection: 'row' }}>
				<main>
					<Outlet />
				</main>
				<Box>
					<TopPlay />
				</Box>
			</Box>
			<MusicPlayer />
		</>
	);
}

export default Root;
