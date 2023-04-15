import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export function getAllNotes() {
    return sendRequest(BASE_URL)
}

export function addNote(newNote) {
    return sendRequest(BASE_URL, 'POST', newNote)
}