import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className='border-b-[1px] border-gray-400 p-2 text-xl font-bold text-sky-700'>
			<Link to='/'>
				<h1>Podcaster</h1>
			</Link>
		</header>
	);
}
