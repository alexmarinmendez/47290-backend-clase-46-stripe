import express from 'express'
import router from './routers/payments.router.js'

const app = express()

app.use(express.static('./src/public'))
app.get('/', (req, res) => res.json({ status: 'ok' }))
app.use('/pay', router)

app.listen(8080, () => console.log('Server Up!'))