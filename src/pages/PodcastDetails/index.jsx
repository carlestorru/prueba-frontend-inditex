import { Outlet, useLocation, useParams } from 'react-router-dom';
import useFetchPodcastDetails from '../../hooks/useFetchPodcastDetails';
import PodcastCard from './PodcastCard';
import EpisodesBanner from './EpisodesBanner';
import TableOfEpisodes from './TableOfEpisodes';

export default function PodcastDetails() {
	const { state } = useLocation();
	const { podcastId } = useParams();
	const [data, isFetching] = useFetchPodcastDetails(podcastId);

	return (
		<main className='p-4'>
			{isFetching ? (
				<p>Cargando...</p>
			) : (
				<div className='flex flex-row justify-evenly'>
					<PodcastCard data={state} />
					<div className='flex flex-col gap-2 w-2/4'>
						<EpisodesBanner numEpisodes={data.resultCount} />
						<TableOfEpisodes
							episodes={data.results.filter(
								(el) => el.kind === 'podcast-episode',
							)}
							state={state}
						/>
					</div>
				</div>
			)}
			<Outlet/>
		</main>
	);
}
