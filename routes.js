//const persons = require('./persons');
const controllerApi = require('./api/controller')

const myFunction = (app) => {
   //app.use(persons)
    app.use('/api/persons', controllerApi)
}

module.exports = myFunction;