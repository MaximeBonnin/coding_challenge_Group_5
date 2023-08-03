import { hostNameUrl } from '../config/api';

export function saveLogin(loginData) {
    // add the url of the endpoint
    // return http.post('', loginData)
    return fetch(
        // add here the endpoint URL
        `${hostNameUrl}/...`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }
    ).then(data => data.json())
}