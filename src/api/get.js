export const apiBaseUrl = `${process.env.FETCH_URL}`

const checkStatus = response => {
	if (response.status >= 200 && response.status < 300) {
		return response
	}

	return Promise.reject(response)
}

const parseJSON = response => {
	if (!response || (response.status && response.status === 204)) return {}
	let json = {}
	try {
		json = response.json()
	} catch (error) {}

	return json
}

const combineUrl = url => `${apiBaseUrl}${url}`

const combineOptions = ({ headers, ...options } = {}) => {
	return {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			...headers,
		},
		...options,
	}
}

const request = (url, options) =>
	fetch(combineUrl(url), combineOptions(options))
		.then(checkStatus)
		.then(parseJSON)
		.catch(async error => {
			return Promise.reject(error)
		})

export const getQuizOptions = () => request('/modes')
