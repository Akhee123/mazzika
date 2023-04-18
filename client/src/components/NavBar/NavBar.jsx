import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const pages = [
	{ page: 'Discover', link: '/' },
	{ page: 'Around You', link: '/around- you' },
	{ page: 'Top Artists', link: '/top-artists' },
	{ page: 'Top Charts', link: '/topcharts' },
];

function NavBar() {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<MusicNoteIcon
						sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
					/>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						MAZZIKA
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}>
						{pages.map((page) => (
							<Button
								key={page.page}
								sx={{
									my: 2,
									color: 'white',
									display: 'block',
								}}
								href={`${page.link}`}>
								{page.page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default NavBar;
