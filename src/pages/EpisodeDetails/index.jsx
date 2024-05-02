import { useLocation } from 'react-router-dom';
import Card from '../../components/Card';

export default function EpisodeDetails() {
	const { state } = useLocation();

	return (
		<section>
			<Card>
				<div className='p-2'>
					<h3 className='font-bold text-lg py-2'>{state.trackName}</h3>
					<div
						className='italic'
						dangerouslySetInnerHTML={{ __html: state.description }}
					/>
					<audio
						className='m-auto mt-8 py-2 w-full'
						src={state.episodeUrl}
						controls={true}></audio>
				</div>
			</Card>
		</section>
	);
}
