import Card from '../../components/Card';

export default function EpisodesBanner({ numEpisodes }) {
	return (
		<Card>
			<h4 className='text-xl font-bold p-2'>Episodes: {numEpisodes}</h4>
		</Card>
	);
}
