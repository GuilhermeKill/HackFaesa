const { Router } = require("express")
const QuestAnsiedadeController = require("../controller/questAnsiedadeController")

const questAnsiedade = Router()

const questAnsiedadeController = new QuestAnsiedadeController()

questAnsiedade.post("/", questAnsiedadeController.create)
questAnsiedade.get("/", questAnsiedadeController.index)


module.exports = questAnsiedade