const express = require('express')
const app = express()
const cors = require ("cors")
const morgan = require('morgan')
const routerApi = require('./api/router')

app.use(express.json())
app.use(cors())
app.use(routerApi)


const PORT = process.env.PORT || 3301

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));

