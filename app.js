import express from 'express'
const app = express()
import process from 'process'

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
})
