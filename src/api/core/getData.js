/**
 * fetData handles error responses.
 * If the server returns 400 or 500 errors, fetchData will convert to a rejected promise that is catch-able
 *
 * @param {*} url
 * @param {*} options
 */
export default async function getData(url, options) {
    const response = await fetch(url, options)
    if (!response.ok) {
        console.log("getData is throwing:", response.status, response.statusText)
        throw new Error("HTTP response was not OK", { cause: { error: response.status, errorInfo: response.statusText } })
    }
    return response.json()
}

