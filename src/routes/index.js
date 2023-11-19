const { Router } = require('express')
const empresaRoutes = require("./questAnsiedade.routes")
const atestadoRoute = require("./questAtestado.routes")


const routes = Router()
routes.use("/ansiedade", empresaRoutes)
routes.use("/atestado", atestadoRoute)


module.exports = routes