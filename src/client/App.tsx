import React, { useEffect, useState } from 'react'
import { Todo } from 'models/todoModel'
import * as API from './api/todos_api'
import { AddModal, Button, TodoItem, SnackBar } from './components'
import { Add, Cross } from './icons'
import './App.css'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [editedTodo, setEditedTodo] = useState<Todo | null>(null)
  const [value, setValue] = useState<string>('')
  const [snackbarData, setSnackbarData] = useState<{ message: string; action?: () => void } | null>(null)

  useEffect(() => {
    getTodos()
  }, [])

  const handleError = (message: string, name: string) => {
    return console.error('API request error: ', message ? `${name}: ${message}` : 'Unknown error')
  }

  const displaySnackBar = (message: string, action?: () => void) => {
    setSnackbarData({ message, action })
    const timer = action ? 8000 : 3000
    setTimeout(() => setSnackbarData(null), timer)
  }

  const getTodos = async () => {
    const data = await API.getTodos()
    if (data?.todos) {
      setTodos(data.todos)
    } else {
      handleError(data?.message, data?.name)
    }
  }

  const addTodo = async () => {
    const data = await API.addTodo(value)
    if (data?.todos) {
      setTodos(data.todos)
      displaySnackBar('Todo added successfully!!')
    } else {
      handleError(data?.message, data?.name)
    }
  }

  const updateTodo = async (todo: Todo) => {
    const data = await API.updateTodo(todo)
    if (data?.todos) {
      setTodos(data.todos)
    } else {
      handleError(data?.message, data?.name)
    }
  }

  const updateTodoText = async () => {
    if (editedTodo) {
      const updatedTodo = { ...editedTodo, text: value }
      const data = await API.updateTodo(updatedTodo)
      if (data?.todos) {
        setTodos(data.todos)
        displaySnackBar('Todo updated successfully!!')
      } else {
        handleError(data?.message, data?.name)
      }
    }
  }

  const deleteTodo = async (todo: Todo) => {
    const data = await API.deleteTodo(todo)
    if (data?.todos) {
      setTodos(data.todos)
      if (!!data.deleted) displaySnackBar('Todo deleted successfully!!', () => updateTodo(data.deleted))
    } else handleError(data?.message, data?.name)
  }

  const handleEdit = (todo: Todo) => {
    setEditedTodo(todo)
    setValue(todo.text)
    setIsOpenModal(true)
  }

  const handleClose = () => {
    setValue('')
    setIsOpenModal(false)
    setEditedTodo(null)
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
            onToggleCompleteness={todo => updateTodo(todo)}
            onEdit={todo => handleEdit(todo)}
            onDelete={todo => deleteTodo(todo)}
          />
        ))}
      </ul>
      <AddModal
        isOpen={isOpenModal}
        value={value}
        setValue={setValue}
        editedTodo={editedTodo}
        close={handleClose}
        submit={editedTodo ? updateTodoText : addTodo}
      />
      <Button className="add-button" isRound onClick={() => setIsOpenModal(!isOpenModal)}>
        {isOpenModal ? <Cross className="add-icon" /> : <Add className="add-icon" />}
      </Button>
      {!!snackbarData && (
        <SnackBar message={snackbarData?.message} action={snackbarData?.action} close={() => setSnackbarData(null)} />
      )}
    </>
  )
}

export default App
