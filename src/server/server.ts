// const express = require('express') // Typescript permits us to use the es6 module import syntax
import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()

import todosRoutes from './routes/todosRoutes'

const app = express()
const PORT = process.env.PORT || 8000

app.use(json()) // populates the body of req.body with parsed json of any json data it finds
app.use(cors())

app.get('/', (req, res) => res.send('Hello world from server'))

app.use('/todos', todosRoutes)

// capture any error sent by next() in controller
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))
