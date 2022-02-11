const api_key ='jDlQHAfwGVaDCuG8z634xFDmiZ897uXn'

export default async function getGifs({keyword = 'morty'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=7&offset=0&rating=g&lang=en`

    const res = await fetch(apiURL)
    const response = await res.json()
    const { data = [] } = response;
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const {images, title, id} = image
            const { url } = images.downsized_medium
            return {title, id, url}
        })
        return gifs
    }
}