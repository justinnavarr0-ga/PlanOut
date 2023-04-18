// const { options } = require("../../routes/api/users")

// const ROOT_URL = 'https://api.chatengine.io/users/'


// // Set any additional options for the request (e.g. request method, body, etc.)
// const options = {
//     method: 'PUT',
//     headers: {
//       'private-key': 'eae3ea60-10e9-4d5a-82dd-96aca72833f7'
//     }
//   };

// async function create(req, res){
//     const {username} = req.user.name
//     console.log('USERNAME', username)
//     try {
//     const newChatUser = await fetch(ROOT_URL, options)
//     res.json(newChatUser)
//     }
//     catch (error){
//         res.status(400).json(error)
//     }

// }

// module.exports = {
//     create,
// }
