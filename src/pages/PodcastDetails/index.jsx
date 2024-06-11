import { useLocation, useParams } from 'react-router-dom';
import useFetchPodcastDetails from '../../hooks/useFetchPodcastDetails';
import EpisodesBanner from './components/EpisodesBanner';
import TableOfEpisodes from './components/TableOfEpisodes';
import Loader from '../../components/Loader/Loader';

export default function PodcastDetails() {
	const { state } = useLocation();
	const { podcastId } = useParams();
	const { data, isLoading } = useFetchPodcastDetails(podcastId);

	return (
		<>
			{isLoading ? (
				<div className='m-auto'>
					<Loader />
				</div>
			) : (
				<div className='flex w-2/4 flex-col gap-2 max-sm:w-full'>
					<EpisodesBanner numEpisodes={data.results[0].trackCount} />
					<TableOfEpisodes
						episodes={data.results.filter(
							(el) => el.kind === 'podcast-episode',
						)}
						state={state}
					/>
				</div>
			)}
		</>
	);
}
