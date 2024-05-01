import fetchAllOrigins from '../services/fetchAllOrigins';
import { useQuery } from 'react-query';

export default function useFetchPodcastDetails(podcastId) {
	const URL = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;

	return useQuery({
		queryKey: ['podcastDetail', podcastId],
		queryFn: async () => {
			const res = await fetchAllOrigins(URL);
			const parsedData = JSON.parse(res.contents);
			return parsedData;
		},
		refetchInterval: 86400000, // 24 hours in millis,
	});
}
