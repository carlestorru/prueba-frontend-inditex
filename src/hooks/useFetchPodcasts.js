import { useEffect, useState } from 'react';
import fetchAllOrigins from '../services/fetchAllOrigins';

const URL =
	'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

export default function useFetchPodcasts() {
	const [data, setData] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		 fetchAllOrigins(URL)
			.then((res) => {
				const parsedData = JSON.parse(res.contents);
				const podcasts = parsedData.feed.entry;
				setData(podcasts);
			})
			.catch((err) => console.log(err))
			.finally(() => setIsFetching(false));
	}, []);

	return [data, isFetching];
}
