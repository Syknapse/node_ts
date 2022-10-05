import React, { useEffect, useState } from 'react'
import { Todo } from 'models/todoModel'
import * as API from './api/todos_api'
import { AddModal, Button, TodoItem } from './components'
import { Add, Cross } from './icons'
import './App.css'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [undoTodo, setUndoTodo] = useState<Todo | null>(null)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null)
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = async () => {
    const data = await API.getTodos()
    if (data?.todos) setTodos(data.todos)
    else console.log('getTodos error: ', data?.message ? `${data.name}: ${data.message}` : 'Unknown error')
  }

  const addTodo = async () => {
    const data = await API.addTodo(value)
    if (data?.todos) setTodos(data.todos)
    else console.log('addTodo error: ', data?.message ? `${data.name}: ${data.message}` : 'Unknown error')
  }

  const updateTodoCompleteness = async (todo: Todo) => {
    const data = await API.updateTodo(todo)
    if (data?.todos) setTodos(data.todos)
    else
      console.log('updateTodoCompleteness error: ', data?.message ? `${data.name}: ${data.message}` : 'Unknown error')
  }

  const updateTodoText = async () => {
    if (editingTodo) {
      const updatedTodo = { ...editingTodo, text: value }
      const data = await API.updateTodo(updatedTodo)
      if (data?.todos) setTodos(data.todos)
      else console.log('updateTodoText error: ', data?.message ? `${data.name}: ${data.message}` : 'Unknown error')
    }
  }

  const deleteTodo = async (todo: Todo) => {
    const data = await API.deleteTodo(todo)
    if (data?.todos) {
      setTodos(data.todos)
      setUndoTodo(data.deleted)
    } else console.log('deleteTodo error: ', data?.message ? `${data.name}: ${data.message}` : 'Unknown error')
  }

  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo)
    setValue(todo.text)
    setIsOpenModal(true)
  }

  const handleClose = () => {
    setValue('')
    setIsOpenModal(false)
    setEditingTodo(null)
  }

  return (
    <>
      <h1 className="title">Todo List</h1>
      <ul className="list">
        {todos.map((todo, i) => (
          <TodoItem
            key={i}
            id={todo.id}
            text={todo.text}
            dateCreated={todo.dateCreated}
            completed={todo.completed}
            onToggleCompleteness={todo => updateTodoCompleteness(todo)}
            onEdit={todo => handleEdit(todo)}
            onDelete={todo => deleteTodo(todo)}
          />
        ))}
      </ul>
      <AddModal
        isOpen={isOpenModal}
        value={value}
        setValue={setValue}
        editingTodo={editingTodo}
        close={handleClose}
        submit={editingTodo ? updateTodoText : addTodo}
      />
      <Button className="add-button" isRound onClick={() => setIsOpenModal(!isOpenModal)}>
        {isOpenModal ? <Cross className="add-icon" /> : <Add className="add-icon" />}
      </Button>
    </>
  )
}

export default App
