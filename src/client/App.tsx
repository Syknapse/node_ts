import React, { useEffect, useState } from 'react'
import { Todo } from 'models/todoModel'
import { AddModal, Button, TodoItem } from './components'
import { Add, Cross } from './icons'
import './App.css'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  useEffect(() => {
    fetch(`${'http://localhost:8000'}/todos`)
      .then(response => response.json())
      .then(data => setTodos(data.todos))
  }, [])

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
            onToggleCompleteness={todo => console.log('toggle: ', todo)}
            onEdit={todo => console.log('edit: ', todo)}
            onDelete={todo => console.log('delete: ', todo)}
          />
        ))}
      </ul>
      <AddModal
        isOpen={isOpenModal}
        close={() => setIsOpenModal(false)}
        addTodo={value => console.log('Adding todo .......', value)}
      />
      <Button className="add-button" isRound onClick={() => setIsOpenModal(!isOpenModal)}>
        {isOpenModal ? <Cross className="add-icon" /> : <Add className="add-icon" />}
      </Button>
    </>
  )
}

export default App
