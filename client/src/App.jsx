import { Provider } from 'react-redux';
import { store } from './redux/store';
import NavBar from './components/NavBar/NavBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Discover from './pages/Discover/Discover';
import TopArtists from './pages/TopArtists/TopArtists';
import TopCharts from './pages/TopCharts/TopCharts';
import AroundYou from './pages/AroundYou/AroundYou';
import ArtistDetails from './pages/ArtistsDetails/ArtistDetails';
import SongDetails from './pages/SongDetails/SongDetails';
import Search from './pages/Search/Search';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{ path: '/', element: <Discover /> },
			{ path: '/top-artists', element: <TopArtists /> },
			{ path: '/top-charts', element: <TopCharts /> },
			{ path: '/around-you', element: <AroundYou /> },
			{ path: '/artists/:id', element: <ArtistDetails /> },
			{ path: '/songs/:songid', element: <SongDetails /> },
			{ path: '/search/:searchTerm', element: <Search /> },
		],
	},
]);

export default function App() {
	return (
		<>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</>
	);
}
