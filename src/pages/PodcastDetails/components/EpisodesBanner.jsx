import Card from '../../../components/Card';

export default function EpisodesBanner({ numEpisodes }) {
	return (
		<Card>
			<h4 className='p-2 text-xl font-bold'>Episodes: {numEpisodes}</h4>
		</Card>
	);
}
