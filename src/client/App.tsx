import React, { useEffect, useState } from 'react'
import { Todo } from 'models/todoModel'
import { TodoItem } from './components'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    fetch(`${'http://localhost:8000'}/todos`)
      .then(response => response.json())
      .then(data => setTodos(data.todos))
  }, [])

  return (
    <>
      <h1>Hello World from React</h1>
      <ul>
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
