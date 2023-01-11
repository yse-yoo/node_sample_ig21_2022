const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const host = process.env.HOST
const port = process.env.PORT

console.log(host)
console.log(port)

const app = express()

// Middleware
//静的コンテンツの配置場所を設定
app.use(express.static(__dirname + '/public'))

// Routing
app.get('/', (req, res) => {
    res.send('Hello, Express')
})

app.get('/profile', (req, res) => {
    res.send('My Profile')
})

app.listen(port, host, () => {
    console.log('Server launched.')
    console.log(host)
    console.log(port)
})
