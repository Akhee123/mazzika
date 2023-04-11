import { useRef, useEffect } from 'react';
import SongCard from '../SongCard/SongCard';
import List from '@mui/material/List';
import songs from '../../../../../topChart.json';

function TopChartsList(props) {
	const scrollRef = useRef();
	useEffect(() => {
		const element = scrollRef.current;
		console.log(element);
		if (element) {
			const onWheel = (event) => {
				if (event.deltaY == 0) return;
				event.preventDefault();
				element.scrollTo({
					left: element.scrollLeft + event.deltaY,
					behavior: 'smooth',
				});
			};
			element.addEventListener('wheel', onWheel);
		}
	}, []);

	return (
		<div ref={scrollRef}>
			<List
				sx={{
					display: 'inline-flex',
					overflowX: 'hidden',
					whiteSpace: 'nowrap',
				}}>
				{songs.map((song) => (
					<SongCard
						albumCover={song.images?.coverart}
						songTitle={song.title}
						artist={song.subtitle}
						key={song.key}
					/>
				))}
			</List>
		</div>
	);
}

export default TopChartsList;
