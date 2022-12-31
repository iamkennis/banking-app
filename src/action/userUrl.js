const baseUrl = process.env.REACT_APP_API_BASE_URL;


export async function getUser() {
    const response = await fetch(baseUrl + "accounts/");
    if (response.ok) return response.json();
    throw response
}

export async function getAccountHistories(id) {
	const response = await fetch(baseUrl + 'accounts/' + id);
	if (response.ok) return response.json();
	throw response;
}