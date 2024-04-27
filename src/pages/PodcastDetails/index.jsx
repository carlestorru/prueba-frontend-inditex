import { Outlet, useParams } from 'react-router-dom';

export default function PodcastDetails() {
	const { podcastId } = useParams();
	return (
		<>
			<p>{podcastId}</p>
			<Outlet />
		</>
	);
}
