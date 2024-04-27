export default async function fetchAllOrigins(url) {
	const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    
	throw new Error('Network response was not ok.');
}
