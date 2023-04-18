import { loader } from '../../assets';
import { Grid, Typography } from '@mui/material';

export default function Loader(props) {
	return (
		<>
			<Grid
				container
				spacing={5}
				direction="column"
				alignItems="center"
				justifyContent="center">
				<img src={loader} alt="loader" />
				<Typography variant="h4">
					{props.title || 'Loading...'}
				</Typography>
			</Grid>
		</>
	);
}
