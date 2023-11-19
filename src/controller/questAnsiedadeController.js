
const sqliteConnection = require('../database/sqlite')


class QuestAnsiedadeController {
    async create(request, response) {
        try {
            const { Pergunta1, Pergunta2, Pergunta3, Pergunta4, Pergunta5, Observacao, usuario } = request.body;

            const database = await sqliteConnection();

            await database.run(
                "INSERT INTO QuestAnsiedade (Pergunta1, Pergunta2, Pergunta3, Pergunta4, Pergunta5, Observacao, Usuario) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [Pergunta1, Pergunta2, Pergunta3, Pergunta4, Pergunta5, Observacao, usuario]
            );

            return response.status(201).json({ success: true });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Internal Server Error" });
        }
    }


    async index(request, response){
        console.log("test")
        const database = await sqliteConnection()

        const data = await database.all("SELECT * FROM QuestAnsiedade")



       

        console.log(data.length);
        return response.json({data: data,
              draw:1,
            recordsFiltered:data.length,
            recordsTotal:data.length,})
    }


}



module.exports = QuestAnsiedadeController
