export default function PodcastCard({ data }) {
	return (
		<div className='flex flex-col items-center text-center m-auto'>
			<img
				className='rounded-full -mb-8 z-10 h-20 w-20'
				src={data['im:image'][0].label}
				alt={data['im:name'].label}
			/>
			<div className='bg-white shadow-xl pt-10 p-2 w-full'>
				<h4>{data['im:name'].label}</h4>
				<p>{`Author: ${data['im:artist'].label}`}</p>
			</div>
		</div>
	);
}
