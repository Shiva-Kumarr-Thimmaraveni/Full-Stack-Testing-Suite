const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8080
require('./Models/dbConnection')
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const authRouter = require('./Routes/authRouter')
const EmailUser= require('./models/emailUsers')
const verifyToken = require('./middlewares/verifyToken')

const JWT_SECRET = process.env.JWT_SECRET
const JWT_TIMEOUT = process.env.JWT_TIMEOUT
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/',  (req, res) => {
    res.send("Hello from Auth Server ")
})

app.use('/auth', authRouter)

app.post('/register', async (req, res) => {
  try {
    const { username, userEmail, password } = req.body

 
    const existingUser = await EmailUser.findOne({ userEmail })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

 
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)


    const newUser = new EmailUser({ username, userEmail, password: hashedPassword })
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    console.error('Error registering user:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

app.post('/login', async (req, res) => {
  try {
    const { userEmail, password } = req.body

    const user = await EmailUser.findOne({ userEmail })
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET,
      {
        expiresIn: JWT_TIMEOUT, 
      }
    )

    res
      .status(200)
      .json({ message: 'Login successful', userEmail, token })
  } catch (error) {
    console.error('Error during login:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})


app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}` });
});




app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT} ` )
})