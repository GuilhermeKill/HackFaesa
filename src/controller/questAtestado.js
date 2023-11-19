const sqliteConnection = require('../database/sqlite')


class QuestAtestadoController{
    async create(request, response){
        const { tipoDoenca, cid, usuario  } = request.body

        const database = await sqliteConnection()
        
        await database.run("INSERT INTO QuestAtestado (tipoDoenca, Cid, usuario) VALUES (?, ?, ?)",
        [tipoDoenca, cid, usuario])


        return response.status(201).json()
    }
    async index(request, response){

        const database = await sqliteConnection()

        const data = await database.all("SELECT * FROM QuestAtestado")


        
        return response.json(data)
    }
}



module.exports = QuestAtestadoController
