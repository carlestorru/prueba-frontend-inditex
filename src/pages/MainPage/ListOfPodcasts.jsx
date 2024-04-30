import { Link } from 'react-router-dom';

import useFetchPodcasts from '../../hooks/useFetchPodcasts';
import PodcastCard from './PodcastCard';

export default function ListOfPodcasts() {
	const [data, isFetching] = useFetchPodcasts();

	return (
		<>
			{isFetching ? (
				<p>Cargando...</p>
			) : (
				<ul className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-6 gap-y-20'>
					{data.map((el) => {
						return (
							<li key={el.id.attributes['im:id']}>
								<Link to={`podcast/${el.id.attributes['im:id']}`} state={el}>
									<PodcastCard data={el} />
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
}
