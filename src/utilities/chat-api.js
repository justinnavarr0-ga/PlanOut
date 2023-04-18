const ROOT_URL = 'https://api.chatengine.io/users/'

export async function createUser(user) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc. 
  const res = await fetch(`${ROOT_URL}/authenticate`, {
    method: 'PUT',
    headers: { 
        'Content-Type': 'application/json',
        'private-key': 'eae3ea60-10e9-4d5a-82dd-96aca72833f7'

    },
    {username: req.user.username, secret: req.user.username}
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData)
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    return res.json();
  } else {
    throw new Error('Invalid Sign Up');
  }
}