import { RequestHandler } from 'express'
import { randomUUID } from 'crypto'

import { Todo } from '../../models/todoModel'
import * as db from '../dynamo'

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    const data = await db.getTodos()
    res.json({ todos: data.Items })
  } catch (error) {
    console.error('getTodos error: ', error)
    next(error)
  }
}

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const text = (req.body as { text: string }).text
    const id = randomUUID({ disableEntropyCache: true })
    const dateCreated = Date.now()
    const completed = false
    const newTodo = new Todo(id, text, dateCreated, completed)

    await db.createOrUpdateTodo(newTodo)
    const data = await db.getTodos()
    res.status(201).json({ message: 'Todo created', todo: newTodo, todos: data.Items })
  } catch (error) {
    console.error('createTodo error: ', error)
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
    const data = await db.getTodos()
    res.status(201).json({ message: 'Todo Updated', updated: updatedTodo, todos: data.Items })
  } catch (error) {
    console.error('updateTodo error: ', error)
    next(error)
  }
}

export const deleteTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
  try {
    const id = req.params.id
    const text = (req.body as { text: string }).text
    const dateCreated = (req.body as { dateCreated: number }).dateCreated
    const completed = (req.body as { completed: boolean }).completed
    const deletedTodo = new Todo(id, text, dateCreated, completed)

    await db.deleteTodo(id)
    const data = await db.getTodos()
    res.status(201).json({ message: 'Todo deleted', deleted: deletedTodo, todos: data.Items })
  } catch (error) {
    console.error('deleteTodo error: ', error)
    next(error)
  }
}
