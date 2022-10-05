import { Todo } from 'models/todoModel'

const API = 'http://localhost:8000'
const ENDPOINT = `${API}/todos`

export const getTodos = async () => {
  try {
    return await fetch(ENDPOINT).then(response => response.json())
  } catch (error) {
    console.error('API error->', error)
    return error
  }
}

export const addTodo = async (text: string) => {
  try {
    return await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    }).then(response => response.json())
  } catch (error) {
    console.error('API error->', error)
    return error
  }
}

export const updateTodo = async (todo: Todo) => {
  try {
    return await fetch(`${ENDPOINT}/${todo.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...todo }),
    }).then(response => response.json())
  } catch (error) {
    console.error('API error->', error)
    return error
  }
}

export const deleteTodo = async (todo: Todo) => {
  try {
    return await fetch(`${ENDPOINT}/${todo.id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...todo }),
    }).then(response => response.json())
  } catch (error) {
    console.error('API error->', error)
    return error
  }
}
