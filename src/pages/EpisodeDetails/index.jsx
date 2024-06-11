import { useLocation } from 'react-router-dom';
import Card from '../../components/Card';

export default function EpisodeDetails() {
	const { state } = useLocation();

	return (
		<section className='w-2/4 max-sm:w-full'>
			<Card>
				<div className='p-2'>
					<h3 className='py-2 text-lg font-bold'>{state.trackName}</h3>
					<div
						className='italic'
						dangerouslySetInnerHTML={{ __html: state.description }}
					/>
					<audio
						className='m-auto mt-8 w-full py-2'
						src={state.episodeUrl}
						controls={true}></audio>
				</div>
			</Card>
		</section>
	);
}
