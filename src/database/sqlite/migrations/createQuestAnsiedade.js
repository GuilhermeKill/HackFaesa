const createQuestAnsiedade = `
  CREATE TABLE IF NOT EXISTS QuestAnsiedade (
    QuestAnsiedadeId INTEGER PRIMARY KEY AUTOINCREMENT,
    Pergunta1 BIT,
    Pergunta2 BIT,
    Pergunta3 BIT,
    Pergunta4 BIT,
    Pergunta5 BIT,
    Observacao VARCHAR,
    Usuario VARCHAR,
    DataDoEstudo TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`

module.exports = createQuestAnsiedade
