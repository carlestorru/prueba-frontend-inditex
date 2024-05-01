import { Link } from 'react-router-dom';

import PodcastCard from './PodcastCard';
import { usePodcasts } from '../../../context/PodcastsContext';
import Loader from '../../../components/Loader/Loader';

export default function ListOfPodcasts() {
	const [podcasts, isLoading] = usePodcasts();
	return (
		<section>
			{isLoading ? (
				<Loader />
			) : (
				<ul className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-6 gap-y-20'>
					{podcasts.map((el) => {
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
		</section>
	);
}
