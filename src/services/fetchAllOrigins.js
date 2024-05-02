export default async function fetchAllOrigins(url) {
	const response = await fetch(`${process.env.REACT_APP_ALL_ORGINIS_URL}/get?url=${encodeURIComponent(url)}`)

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    
	throw new Error('Network response was not ok.');
}
