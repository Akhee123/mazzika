import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SongCard(props) {
	// const dispatch = useDispatch();

	return (
		<Card sx={{ width: 200, height: 350 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					image={props.song.images?.coverart}
					alt="album cover"
				/>
			</CardActionArea>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.song.title}
				</Typography>
				<Typography variant="h6" color="text.secondary">
					{props.song.subtitle}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default SongCard;
