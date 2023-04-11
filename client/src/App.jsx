import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import NavBar from './components/NavBar/NavBar';
import TopChartsList from './components/TopChartsList/TopChartsList';

export default function App() {
	return (
		<>
			<NavBar />
			<TopChartsList />
			<MusicPlayer />
		</>
	);
}
