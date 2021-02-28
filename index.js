const express = require('express')
const app = express()
const cors = require ("cors")
const morgan = require('morgan')
const routesConfig = require('./routes')

app.use(express.json())
app.use(cors())


routesConfig(app)

const PORT = process.env.PORT || 3301

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));