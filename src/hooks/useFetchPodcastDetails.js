import { useState, useEffect } from 'react';
import fetchAllOrigins from '../services/fetchAllOrigins';

export default function useFetchPodcastDetails(podcastId) {
	const URL = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
	const [data, setData] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		fetchAllOrigins(URL)
			.then((res) => {
				const parsedData = JSON.parse(res.contents);
				console.log(parsedData);
				setData(parsedData);
			})
			.catch((err) => console.log(err))
			.finally(() => setIsFetching(false));
	}, []);

	return [data, isFetching];
}
