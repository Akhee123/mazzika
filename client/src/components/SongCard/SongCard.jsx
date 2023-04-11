import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function SongCard(props) {
	return (
		<Card sx={{ maxWidth: 300 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image={props.albumCover}
					alt="album cover"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.songTitle}
					</Typography>
					<Typography variant="h6" color="text.secondary">
						{props.artist}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default SongCard;
