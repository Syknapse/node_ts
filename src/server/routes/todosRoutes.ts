// normal syntax
// const express = require('express)
// const Router = express.Router
// TypeScript syntax
import { Router } from 'express'

import { createTodo } from '../controllers/todosController'
import { getTodos } from '../controllers/todosController'
import { updateTodo } from '../controllers/todosController'
import { deleteTodo } from '../controllers/todosController'

const router = Router()

router.post('/', createTodo)

router.get('/', getTodos)

router.patch('/:id', updateTodo)

router.delete('/:id', deleteTodo)

export default router
