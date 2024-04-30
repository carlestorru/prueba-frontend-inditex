import { useLocation, useParams } from 'react-router-dom';
import useFetchPodcastDetails from '../../hooks/useFetchPodcastDetails';
import EpisodesBanner from './EpisodesBanner';
import TableOfEpisodes from './TableOfEpisodes';

export default function PodcastDetails() {
	const { state } = useLocation();
	const { podcastId } = useParams();
	const [data, isFetching] = useFetchPodcastDetails(podcastId);

	return (
		<>
			{isFetching ? (
				<p>Cargando...</p>
			) : (
				<div className='flex flex-col gap-2 w-2/4'>
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
