import { usePodcasts } from '../../../context/PodcastsContext';

export default function Filters() {
	const [podcasts, , searchFilterPodcasts] = usePodcasts();

	return (
		<section className='self-end'>
			<label
				className='bg-blue-400 p-3 text-white font-bold rounded mr-4'
				htmlFor=''>
				{podcasts.length}
			</label>
			<input
				className='p-2 border-[1px] border-gray-400 rounded'
				type='text'
				placeholder='Filter podcasts...'
				onChange={(event) => searchFilterPodcasts(event.target.value)}
			/>
		</section>
	);
}
