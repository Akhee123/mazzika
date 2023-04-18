import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { genres } from '../../assets/constants';
import { Typography } from '@mui/material';
import SongCard from '../../components/SongCard/SongCard';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { useDispatch, useSelector } from 'react-redux';

export default function Discover() {
	const { data, isFetching, error } = useGetTopChartsQuery();
	const [genre, setGenre] = useState('');

	if (isFetching) return <Loader title="Loading songs..." />;

	if (error) return <Error />;

	const handleChange = (event) => {
		setGenre(event.target.value);
	};

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Box sx={{ minWidth: 120, mt: 5 }}>
					<Typography variant="h4" gutterBottom>
						Discovery
					</Typography>
					<FormControl sx={{ minWidth: 120 }}>
						<InputLabel id="genre">Genre</InputLabel>
						<Select
							sx={{ marginBottom: 5 }}
							labelId="genre"
							id="genre"
							value={genre}
							label="Genre"
							onChange={handleChange}>
							{genres.map((genre) => (
								<MenuItem key={genre.value} value={genre.value}>
									{genre.title}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
					{data?.map((song, index) => (
						<SongCard
							key={song.key}
							song={song}
							data={data}
							index={index}
						/>
					))}
				</Box>
			</Box>
		</>
	);
}
