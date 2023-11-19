const createQuestAtestado = `
  CREATE TABLE IF NOT EXISTS QuestAtestado (
    QuestAtestadoId INTEGER PRIMARY KEY AUTOINCREMENT,
    TipoDoenca int,
    Cid int,
    Usuario VARCHAR,
    DataDeEnfermidade TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`

module.exports = createQuestAtestado