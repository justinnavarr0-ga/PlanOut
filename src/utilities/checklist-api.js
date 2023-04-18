import sendRequest from "./send-request";

const BASE_URL = "/api/checklist"


export function getWholeChecklist(){
    return sendRequest(BASE_URL)
  }

export async function addItem(newItem){ 
    return sendRequest(`${BASE_URL}/new`, 'POST', newItem)
}

export async function deleteItem(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE', {id})
}

// export async function addItem(newItem){
// const res = await fetch(`${BASE_URL}/new`, {
//     method: 'POST',
//     headers: { 
//             'Content-Type': 'application/json',
//         },
//     body: JSON.stringify({ text: newItem})
//     });
// // Check if request was successful
// if (res.ok) {
//     // res.json() will resolve to the JWT
//     return res.json();
//     } else {
//         throw new Error('Invalid');
//       }
// }

