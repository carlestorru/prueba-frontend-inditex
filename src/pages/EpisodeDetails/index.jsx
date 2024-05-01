import { useLocation } from 'react-router-dom';
import Card from '../../components/Card';

export default function EpisodeDetails() {
	const { state } = useLocation();
	console.log(state);
	return (
		<section>
			<Card>
				<div className='p-2'>
					<h3 className='font-bold text-lg py-2'>{state['im:name'].label}</h3>
					<p className='italic'>{state.summary.label}</p>
                    <audio className='m-auto mt-8 py-2 w-full' src={state.episodeUrl} controls={true}></audio>
				</div>
			</Card>
		</section>
	);
}
