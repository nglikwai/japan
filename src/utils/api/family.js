const baseUrl = 'https://api-japan.vercel.app/api'
// const api = 'https://api-dse00.herokuapp.com'
// const api = 'http://localhost:3000/api'


export const updateFamily = async (locations, user) => request('families', { locations }, user, 'PATCH')

export const getFamily = async (user) => request('families', false, user)

export const getRank = async () => request('families/location')

const request = async (api, payload, id, method = 'GET') => {
    let response
    const url = `${baseUrl}/${api}${id ? `/${id}` : ''}`

    if (method === 'GET') {
        response = await fetch(url)
    }
    if (['PATCH', 'PUT', 'POST'].includes(method)) {
        response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
    }


    const json = await response.json()
    return json


}