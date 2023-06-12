const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require("./config/db")
const fileRoute = require("./routes/files")

const cloudinary = require("cloudinary").v2
const app = express()

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_CLOUD,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,

})

connectDB()

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use('/api/files', fileRoute)
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})