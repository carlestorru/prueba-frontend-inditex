import { usePodcasts } from '../../../context/PodcastsContext';

export default function Filters() {
	const { podcasts, searchFilterPodcasts } = usePodcasts();

	return (
		<section className='self-end'>
			<label
				className='mr-4 rounded bg-blue-400 p-3 font-bold text-white'
				htmlFor='searchBarPodcasts'>
				{podcasts.length}
			</label>
			<input
				id='searchBarPodcasts'
				className='rounded border-[1px] border-gray-400 p-2'
				type='text'
				placeholder='Filter podcasts...'
				onChange={(event) => searchFilterPodcasts(event.target.value)}
			/>
		</section>
	);
}
