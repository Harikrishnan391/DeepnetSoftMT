import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import menuRoutes from './routes/menuRoutes.js'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api', menuRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
