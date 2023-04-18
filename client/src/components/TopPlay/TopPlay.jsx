import { Box, Stack, Typography } from '@mui/material';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';
import TopChartCard from './TopChartCard';

export default function TopPlay() {
	const { data } = useGetTopChartsQuery();

	const topPlays = data?.slice(0, 5);
	return (
		<>
			<Stack
				sx={{ marginRight: 0, marginTop: 5 }}
				direction="column"
				position="sticky"
				spacing={2}>
				<Typography variant="h4">Top Songs</Typography>
				{topPlays?.map((song, index) => (
					<TopChartCard song={song} index={index} key={index} />
				))}
			</Stack>
		</>
	);
}
