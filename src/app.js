import express from 'express'

const app = express()

app.get('/', (req, res) => res.json({ status: 'ok' }))

app.listen(8080, () => console.log('Server Up!'))