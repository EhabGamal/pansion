const API_ENDPOINT = 'https://api.myjson.com/bins/tl0bp';

export function getHotels() {
  return fetch(
      API_ENDPOINT, {
        method: 'GET'
      }
    )
    .then(res => res.json());
}
