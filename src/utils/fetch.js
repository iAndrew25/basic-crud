const API_URL = 'http://localhost:8081';

export default function(url, method, options = {}) {
	return fetch(`${API_URL}${url}`, {
		method,
		headers: {
			"Content-Type": "application/json", 
			"Accept": "application/json"
		},
		...options
	}).then(r => r.json());
}