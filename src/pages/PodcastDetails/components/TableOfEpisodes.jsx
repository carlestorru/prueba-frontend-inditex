import { Link, useLocation } from 'react-router-dom';
import Card from '../../../components/Card';
import { convertDateFormat } from '../../../utils/convertDateFormat';
import { convertMillisToMinutesAndSeconds } from '../../../utils/convertMillis';

export default function TableOfEpisodes({ episodes, state }) {
	const { pathname } = useLocation();

	return (
		<Card>
			<table className='text-left w-full'>
				<thead>
					<tr className='border-b border-gray-300'>
						<th>Title</th>
						<th>Date</th>
						<th>Duration</th>
					</tr>
				</thead>
				<tbody>
					{episodes.map((el, index) => (
						<tr
							key={el.trackId}
							className={`border-b border-gray-300 ${index % 2 === 0 && 'bg-gray-200'}`}>
							<td className='text-blue-400 py-2'>
								<Link
									to={`${pathname}/episode/${el.trackId}`}
									state={{ ...state, episodeUrl: el.episodeUrl }}>
									{el.trackName}
								</Link>
							</td>
							<td>{convertDateFormat(el.releaseDate)}</td>
							<td>{convertMillisToMinutesAndSeconds(el.trackTimeMillis)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Card>
	);
}
