export default async function postData(url, data, options) {
    const headers = {
        Accept: 'application.json',
        'Content-Type': 'application/json',
        ...options?.headers
    }
    const post_options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }
    const response = await fetch(url, post_options)
    if (!response.ok) {
        console.log("postData is throwing:", response.status, response.statusText)
        throw new Error("HTTP response was not OK", { cause: { error: response.status, errorInfo: response.statusText } })
    }
    return response.json()
}
