const sqliteConnection = require('../../sqlite')
const createQuestAnsiedade = require('./createQuestAnsiedade')
//const createQuestAtestado = require('./createQuestAtestado')

async function migrationsRun(){
  const schemas = [
    //createQuestAtestado 
    createQuestAnsiedade
  ].join('')

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error))
}

module.exports = migrationsRun