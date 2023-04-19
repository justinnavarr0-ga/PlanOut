const express = require('express');
const router = express.Router();

const chatCtrl = require('../../controllers/api/chat')

router.post('/authenticate', chatCtrl.createUsername)
// async (req, res) => {
//     const { username } = req.body;
  
//     try {
//       const response = await fetch('https://api.chatengine.io/users/', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Private-Key': 'eae3ea60-10e9-4d5a-82dd-96aca72833f7',
//         },
//         body: JSON.stringify({
//           username: username,
//           secret: username,
//           first_name: username,
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Request failed');
//       }
  
//       const data = await response.json();
  
//       return res.status(response.status).json(data);
//     } catch (error) {
//       return res.status(400).json({ error: error.message });
//     }
//   });



// router.post("/login", async (req, res) => {
//   const { username, secret } = req.body;

//   // Fetch this user from Chat Engine in this project!
//   try {
//     const r = await axios.get("https://api.chatengine.io/users/me/", {
//       headers: {
//         "Project-ID": 'd41212d7-d4d5-4d52-aa60-acca47bad2eb',
//         "User-Name": username,
//         "User-Secret": secret,
//       },
//     });
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     return res.status(e.response.status).json(e.response.data);
//   }
// });

module.exports = router;