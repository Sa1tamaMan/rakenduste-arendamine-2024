const express = require('express')
const app = express()
const port = 3000
const catsRoutes = require("./routes/cats.routes.js");

app.use(express.json());

app.use("/cats", catsRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

/*
const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}
  
const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}
  
const cb2 = function (req, res) {
    res.send('Hello from C!')
}
  
app.get('/example/c', [cb0, cb1, cb2])
*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})