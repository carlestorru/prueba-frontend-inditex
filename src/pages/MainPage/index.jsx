import Filters from './components/Filters';
import ListOfPodcasts from './components/ListOfPodcasts';
import { PodcastsProvider } from '../../context/PodcastsContext';

export default function MainPage() {
	return (
		<main className='w-full p-2 flex flex-col gap-4'>
			<PodcastsProvider>
				<Filters />
				<ListOfPodcasts />
			</PodcastsProvider>
		</main>
	);
}
