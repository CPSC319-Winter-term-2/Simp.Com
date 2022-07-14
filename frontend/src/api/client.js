const baseUrl = "http://localhost:8888"

/**
 * Fetch protected API with current active JWT token. 
 * @return !!! raw response 
 */
export const fetchAPI = async function (method, data, params, ...path) {

    if (data === null || data === undefined) data = {};
    if (params === null || params === undefined) params = {};

    return new Promise((resolve, reject) => {
        resolve(JSON.stringify(data));
    }).then(dataStr => {
        // Fetch RESTful resources
        let url = baseUrl + '/' + path.join('/');
        let paramsKV = Object.entries(params);
        if (paramsKV.length > 0) {
            url += '?';
            url += paramsKV.map(([k, v]) => k + '=' + v).join('&')
        }
        let config = {
            method: method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: dataStr,
            credentials: 'include'
        }
        return fetch(url, config)
    })
}