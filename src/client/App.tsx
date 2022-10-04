import React, { useEffect, useState } from 'react'
import { Todo } from 'models/todoModel'
import { TodoItem } from './components'
import './App.css'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
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
    </>
  )
}

export default App
