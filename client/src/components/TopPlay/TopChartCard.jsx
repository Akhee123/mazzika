import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function TopChartCard(props) {
	return (
		<>
			<Card sx={{ display: 'flex', height: 70, width: 400 }}>
				<Typography variant="h4">{props.index + 1}. </Typography>
				<CardActionArea sx={{ width: 200 }}>
					<CardMedia
						component="img"
						image={props.song.images?.coverart}
						alt="album cover"
					/>
				</CardActionArea>
				<CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography variant="subtitle1" gutterBottom>
						{props.song.title}
					</Typography>
					<Typography variant="subtitle2" color="text.secondary">
						{props.song.subtitle}
					</Typography>
				</CardContent>
			</Card>
		</>
	);
}

export default TopChartCard;
