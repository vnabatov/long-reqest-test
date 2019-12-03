const express = require('express')
const app = express()
const PORT = 3002

app.post('/upload', (req, res) => {
  console.log('start', new Date())
  res.send('DONE')
  console.log('finished')
})

app.use(require('express-fileupload')())
app.use(express.static('public'))

require('http').createServer(app).listen(PORT, () => {
  console.log('listening on *:' + PORT)
})
