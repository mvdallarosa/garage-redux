// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS'
export function fetchCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export const FETCH_CAR = 'FETCH_CAR'
export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export const CAR_CREATED = 'CAR_CREATED'
export function createCar(body, callback) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/meri/cars`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);
  return {
    type: CAR_CREATED, // Not used by reducer (we navigate)
    payload: promise
}; }
