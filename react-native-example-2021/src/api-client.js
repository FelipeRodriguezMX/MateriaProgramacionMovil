const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=cba1e463f436dc39237df6d5d3c24c29&format=json'

const getMusicData = () => {
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => data.topartists.artist)
  .then(artists => artists.map(artist => {
    return {
      id: artist.mbid,
      name: artist.name,
      image: artist.image[0]['#text']
    }
  }))
}

export {getMusicData}