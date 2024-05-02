import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="font-bold text-sky-700 text-xl p-2 border-b-[1px] border-gray-400">
            <Link to='/'>
			<h1>Podcaster</h1>
            </Link>
		</header>
	);
}
