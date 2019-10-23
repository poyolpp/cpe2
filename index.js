const express = require('express')
const app = express()
const port = 15378

app.get('/', (req, res) =>
  res.send('Greetings from poyolpp...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
