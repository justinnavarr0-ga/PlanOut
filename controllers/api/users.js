const User = require('../../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
  create,
  checkToken,
  index
}

async function index(req, res){
  try {
    const users = await User.find()
    console.log(users)
    res.json(users)
  } catch (error) {
    res.status(400).json(error)
  }
}

async function create(req, res){
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.json(token)
  } catch (error) {
    res.status(400).json(error)
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  res.json(req.exp);
}

function createJWT(user){
  return jwt.sign(
    {user},
    process.env.SECRET,
    { expiresIn: '24hr'}
  )
}