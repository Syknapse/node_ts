import clsx from 'clsx'
import { Todo } from 'models/todoModel'
import { Button } from '../../components'
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
      <Button
        className="completed-button"
        isRound
        onClick={() => onToggleCompleteness({ id, text, dateCreated, completed })}
      />
      <p className="text">{text}</p>
      <Button
        className="edit-button"
        disabled={completed}
        isRound
        onClick={() => onEdit({ id, text, dateCreated, completed })}
      />
      <Button className="delete-button" isRound onClick={() => onDelete({ id, text, dateCreated, completed })} />
    </li>
  )
}

export default TodoItem
