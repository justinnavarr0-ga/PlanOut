const BASE_URL = "/api/chat"


export async function createUser(){
    const res = await fetch(`${BASE_URL}/authenticate`, {
        method: 'POST',
        headers: { 
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({ text: newItem})
        });
    // Check if request was successful
    if (res.ok) {
        // res.json() will resolve to the JWT
        return res.json();
        } else {
            throw new Error('Invalid');
          }
    }