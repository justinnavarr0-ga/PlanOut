const axios = require("axios"); 

async function createUsername (req, res) {
    const {username} = req.body;
  
    // Store a user-copy on Chat Engine!
    try {
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username },
        { headers: { "Private-Key": 'eae3ea60-10e9-4d5a-82dd-96aca72833f7' } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  };

module.exports = {
    createUsername,
}
