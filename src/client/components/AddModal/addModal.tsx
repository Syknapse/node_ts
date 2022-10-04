import clsx from 'clsx'
import { Todo } from 'models/todoModel'
import { Button } from '../../components'
import { Add } from '../../icons'
import './addModal.css'

interface IAddModalProps {
  isOpen: boolean
  close: () => void
  addTodo: () => void
}

const AddModal: React.FC<IAddModalProps> = ({ isOpen, close, addTodo }) => {
  const handleSubmit = () => {
    addTodo()
    close()
  }

  return (
    <div className={clsx('add-modal', isOpen && 'open')}>
      <div className="backdrop" onClick={close}></div>
      <div className="modal">
        <h2 className="modal-title">Add your todo</h2>
        <input className="modal-input" type="text" />
        <Button className="modal-button" onClick={handleSubmit}>
          Confirm
          <Add className="modal-icon" />
        </Button>
      </div>
    </div>
  )
}

export default AddModal
