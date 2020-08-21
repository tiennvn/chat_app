const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/', function(req, res){
  res.sendFile('/index.html');
  });

app.listen(port, () => {
  console.log(`Chating application listening at http://localhost:${port}`)
})