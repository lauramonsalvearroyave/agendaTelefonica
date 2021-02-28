const {Router} = require("express")
const router = new Router()
const persons = require('./../persons')



//router.get('/', (req, res) => {
    //res.send('Esta es la versón mejorada de Juan Pablo y Laura M')
//})

router.get('/', (req, res) => {
    res.json(persons)
})

router.get('/info', (req, res) => {
    const quantity = persons.length
    let date = new Date()
    res.send(`Phonebook has info for ${quantity} people <br> <br> ${date} `)
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const person = persons.find(person => person.id === Number(id))
    if (person) { res.json(person) } else { res.status(404).end() }
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const personsFiltered = persons.filter(person => person.id !== Number(id))
    res.status(200).json(personsFiltered)
    //res.status(204).end()
})

router.post('/', (req, res) => {
    const payload = req.body;
    if (!payload.name) {
        res.status(400).send({ error: "missing name" })
        return
    }

    if (!payload.number) {
        res.status(400).send({ error: "missing number" })
        return
    }

    if (persons.some((person) => person.name === payload.name)) {
        res.status(409).send({ error: "name must be unique" })
        return
    }

    const randomId = Math.floor(Math.random() * 1000)

    const newPerson = {
        id: randomId,
        ...payload
    }

    persons.push(newPerson)

    res.status(200).json(newPerson)

    const { id } = randomId

})

module.exports = router