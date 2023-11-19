const express = require("express")
const migrationsRun = require('./database/sqlite/migrations')
const routes = require("./routes")
const cors = require("cors")

const app = express()

migrationsRun()

app.use(express.json())
app.use(cors())
app.use(routes)

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: 'error',
          message: error.message
        })
    }
    
    console.error(error)
    
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

const PORT = 7777
app.listen(PORT, console.log("Run in port 7777"))