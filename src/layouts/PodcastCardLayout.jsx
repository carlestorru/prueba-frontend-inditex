import { Outlet, useLocation } from 'react-router-dom';
import PodcastCard from '../pages/PodcastDetails/PodcastCard';

export default function PodcastCardLayout() {
	const { state } = useLocation();
	return (
		<main className='flex flex-row justify-evenly p-4 gap-2'>
			<PodcastCard data={state} />

			<Outlet />
		</main>
	);
}
