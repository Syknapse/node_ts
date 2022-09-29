import { RequestHandler } from 'express'
import { randomUUID } from 'crypto'

import { Todo } from '../../models/todoModel'
import * as db from '../dynamo'

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const text = (req.body as { text: string }).text
    const id = randomUUID({ disableEntropyCache: true })
    const dateCreated = Date.now()
    const completed = false
    const newTodo = new Todo(id, text, dateCreated, completed)

    await db.createOrUpdateTodo(newTodo)
    res.status(201).json({ message: 'Todo created', todo: newTodo })
  } catch (error) {
    console.error('createTodo error: ', error)
    next(error)
  }
}

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    const data = await db.getTodos()
    res.json({ todos: data.Items })
  } catch (error) {
    console.error('getTodos error: ', error)
    next(error)
  }
}

export const updateTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
  try {
    const id = req.params.id
    const updatedText = (req.body as { text: string }).text
    const dateCreated = (req.body as { dateCreated: number }).dateCreated
    const completed = (req.body as { completed: boolean }).completed
    const updatedTodo = new Todo(id, updatedText, dateCreated, completed)

    await db.createOrUpdateTodo(updatedTodo)
    res.status(201).json({ message: 'Todo Updated', todo: updatedTodo })
  } catch (error) {
    console.error('updateTodo error: ', error)
    next(error)
  }
}

export const deleteTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
  try {
    const id = req.params.id

    await db.deleteTodo(id)
    res.status(201).json({ message: 'Todo deleted', id })
  } catch (error) {
    console.error('deleteTodo error: ', error)
    next(error)
  }
}
