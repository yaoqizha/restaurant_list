const express = require('express')
const app = express()

const port = 3000

// setting the route and corresponding response
app.get('/', (req, res) => {
  res.send(`hahaha`)
  res.render('index')
})
app.get('restaurants/:restaurant_id', (req, res) => {
  res.render('show')
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})