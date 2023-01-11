const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const host = process.env.HOST
const port = process.env.PORT

console.log(host)
console.log(port)
