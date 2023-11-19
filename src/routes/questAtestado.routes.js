const { Router } = require("express")
const QuestAtestadoController = require("../controller/questAtestado")

const atestadoRoute = Router()

const questAtestadoController = new QuestAtestadoController()

atestadoRoute.post("/", questAtestadoController.create)
atestadoRoute.get("/", questAtestadoController.index)



module.exports = atestadoRoute