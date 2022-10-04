import clsx from 'clsx'
import { Todo } from 'models/todoModel'
import { Button } from '../../components'
import { Cross, Edit, RecFilled, RecOutlined } from '../../icons'
import './todoItem.css'

interface ITodoItemProps {
  id: string
  text: string
  dateCreated: number
  completed: boolean
  onToggleCompleteness: (todo: Todo) => void
  onEdit: (todo: Todo) => void
  onDelete: (todo: Todo) => void
}

const TodoItem: React.FC<ITodoItemProps> = ({
  id,
  text,
  dateCreated,
  completed,
  onToggleCompleteness,
  onEdit,
  onDelete,
}) => {
  return (
    <li className={clsx('todo-item', completed && 'completed')}>
      <div className="item-container">
        <Button
          className={clsx('todo-button', 'completed-button')}
          isRound
          onClick={() => onToggleCompleteness({ id, text, dateCreated, completed })}
        >
          {completed ? <RecFilled className="todo-icon" /> : <RecOutlined className="todo-icon" />}
        </Button>
        <p className="text">{text}</p>
      </div>
      <div className="button-container">
        <Button
          className="todo-button"
          disabled={completed}
          isRound
          onClick={() => onEdit({ id, text, dateCreated, completed })}
        >
          <Edit className="todo-icon" />
        </Button>
        <Button className="todo-button" isRound onClick={() => onDelete({ id, text, dateCreated, completed })}>
          <Cross className="todo-icon" />
        </Button>
      </div>
    </li>
  )
}

export default TodoItem
