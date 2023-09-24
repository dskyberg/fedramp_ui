export default async function deleteData(url, options) {
    const headers = {
        Accept: 'application.json',
        'Content-Type': 'application/json',
        ...options?.headers
    }
    const delete_options = {
        method: 'DELETE',
        headers: headers
    }
    const response = await fetch(url, delete_options)
    if (!response.ok) {
        console.log("getData is throwing:", response.status, response.statusText)
        throw new Error("HTTP response was not OK", { cause: { error: response.status, errorInfo: response.statusText } })
    }
    return response
}

