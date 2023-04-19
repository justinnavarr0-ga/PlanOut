const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  create,
  checkToken,
  index,
  login
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error();
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      throw new Error();
    }
    res.json( createJWT(user) );
  } catch (error) {
    res.status(400).json('Bad Credentials');
  }
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