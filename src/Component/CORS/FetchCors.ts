const SUDOHUB_APIKEY="dshopapi:mycool_assword"

function fetchCORS(url: URL | RequestInfo, init?: RequestInit | undefined): Promise<Response> {
    // Ensure that only relative URLs are allowed
    if (typeof url === 'string' && url.startsWith('http')) {
        throw new Error('Only relative URLs are allowed');
    }

    // Add authentication headers or any other required headers
    const headers = {
        'Authorization': 'Basic ' + btoa(SUDOHUB_APIKEY),
        'Content-Type': 'application/json'
    };

    // Merge custom headers with provided options
    const fetchOptions: RequestInit = {
        ...init,
        headers: {
            ...init?.headers,
            ...headers
        },
        mode: 'cors',
        credentials: 'include'
    };
    //console.log(fetchOptions)
    //modify url so it goes to domain
    url = new URL('https://shop.sudohub.dev/' + (url as string));

    // Perform fetch with the modified options
    return fetch(url, fetchOptions);
}

export default fetchCORS;