// const express = require('express') // Typescript permits us to use the es6 module import syntax
import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'

import todoRoutes from './routes/todos'

const app = express()

app.use(json()) // populates the body of req.body with parsed json of any json data it finds

app.use('/todos', todoRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

app.listen(8080)
