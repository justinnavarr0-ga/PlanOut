const express = require('express');
const router = express.Router();
// const chatCtrl = require('../../controllers/chat')

router.post('/authenticate', async (req, res) => {
    const { username } = req.body;
  
    try {
      const response = await fetch('https://api.chatengine.io/users/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Private-Key': 'eae3ea60-10e9-4d5a-82dd-96aca72833f7',
        },
        body: JSON.stringify({
          username: username,
          secret: username,
          first_name: username,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const data = await response.json();
  
      return res.status(response.status).json(data);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });

module.exports = router;