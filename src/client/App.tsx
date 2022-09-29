import React, { useEffect, useState } from 'react'
import { Todo } from 'models/todoModel'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    fetch(`${'http://localhost:8000'}/todos`)
      .then(response => response.json())
      .then(data => setTodos(data.todos))
  }, [])

  return (
    <>
      <h1>Hello World from React</h1>
      {todos.map((todo, i) => (
        <div key={i}>{todo.text}</div>
      ))}
    </>
  )
}

export default App
