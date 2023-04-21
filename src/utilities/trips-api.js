import sendRequest from "./send-request"

const BASE_URL = "/api/trips"

export function getAllTrips(){
    return sendRequest(BASE_URL)
  }

export function createTrip(newTrip){
    return sendRequest(`${BASE_URL}/new`, 'POST', newTrip)
}

export function showTrip(trip){
    return sendRequest(`${BASE_URL}/:id`, trip)
}

export async function deleteTrip(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE', id)
}

export async function updateTrip(id) {
    return sendRequest(`${BASE_URL}/${id._id}`, 'PUT', id)
}