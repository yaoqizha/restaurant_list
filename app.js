const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ default: "main" }))
app.set('view engine', 'handlebars')
// setting the route and corresponding response
app.get('/', (req, res) => {
  res.render('index')
})
// dynamic routes with params ':restaurant_id'
app.get('restaurants/:restaurant_id', (req, res) => {
  res.render('show')
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})