const express = require('express')
const app = express()
const port = 3000
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./db');
const cors = require('cors')

app.use(express.json()); // Middleware to parse JSON

connectDB();

// Use CORS middleware
app.use(cors());


// Use routes
app.use('/api', userRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
    

// mongodb+srv://Zahid:<db_password>@cluster0.4kudn.mongodb.net/