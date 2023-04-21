import sendRequest from "./send-request";

const BASE_URL = "/api/checklist"

export async function markComplete(id) {
    return sendRequest(`${BASE_URL}/${id}/complete`, "PUT", {id})
}

export function getWholeChecklist(){
    return sendRequest(BASE_URL)
  }

export async function addItem(newItem){ 
    return sendRequest(`${BASE_URL}/new`, 'POST', newItem)
}

export async function deleteItem(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE', {id})
}



