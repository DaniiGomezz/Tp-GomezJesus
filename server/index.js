import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'morgan';

import { environments } from './src/config/environments.js'
import { startDb } from './src/config/database.js'

const app = express()

app.use(express.json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST']
}))
app.use(morgan('dev'))
app.use(helmet())


app.listen(environments.PORT, async () => {
  console.log(`server on port ${environments.PORT}`)
  startDb()
})