import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

function MainLayout() {
	return (
		<div className='h-screen overflow-auto'>
			<Header />
			<Outlet />
		</div>
	);
}

export default MainLayout;
