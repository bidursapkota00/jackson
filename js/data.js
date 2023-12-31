async function fetchData() {
    try {
        return await (await fetch('../utils/data.json')).json()
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

fetchData();