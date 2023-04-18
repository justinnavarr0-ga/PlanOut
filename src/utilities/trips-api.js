import sendRequest from "./send-request"

const BASE_URL = "/api/trips"

export function getAllTrips(){
    return sendRequest(BASE_URL)
  }

export function createTrip(newTrip){
    return sendRequest(`${BASE_URL}/new`, 'POST', newTrip)
}