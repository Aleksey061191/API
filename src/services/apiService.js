import React from 'react'

const createApiInstance = (baseUrl, defaultHeaders) => ({
    get: (url, params) => fetch('${ baseUrl } / ${ url }',
        { ...defaultParams, ...params })
        .then(data => data.json())
        .catch(err => {
            console.error(err);
        })


})

export const ApiService = createApiInstance('https://google-translate1.p.rapidapi.com/language/translate', {
    headers: {
        "accept-encoding": "application/gzip",
        "x-rapidapi-key": "SIGN-UP-FOR-KEY",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com"
    }
})