import Filters from './components/Filters';
import ListOfPodcasts from './components/ListOfPodcasts';
import { PodcastsProvider } from '../../context/PodcastsContext';

export default function MainPage() {
	return (
		<main className='flex w-full flex-col gap-4 p-2'>
			<PodcastsProvider>
				<Filters />
				<ListOfPodcasts />
			</PodcastsProvider>
		</main>
	);
}
