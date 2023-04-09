import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function SongCard() {
	return (
		<Card sx={{ maxWidth: 300 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image="https://cdna.artstation.com/p/assets/images/images/010/722/850/large/oksana-radionova-nomnom.jpg"
					alt="album cover"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Song
					</Typography>
					<Typography variant="h6" color="text.secondary">
						Artist
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default SongCard;
