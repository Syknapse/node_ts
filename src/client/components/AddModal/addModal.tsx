import React, { useState } from 'react'
import clsx from 'clsx'
import { Button } from '../../components'
import { Add } from '../../icons'
import './addModal.css'

interface IAddModalProps {
  isOpen: boolean
  close: () => void
  addTodo: (value: string) => void
}

const AddModal: React.FC<IAddModalProps> = ({ isOpen, close, addTodo }) => {
  const [value, setValue] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(value)
    close()
    setValue('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)

  return (
    <form className={clsx('add-modal', isOpen && 'open')} onSubmit={handleSubmit}>
      <div className="backdrop" onClick={close}></div>
      <div className="modal">
        <h2 className="modal-title">Add your todo</h2>
        <input className="modal-input" type="text" onChange={handleChange} value={value} />
        <Button className="modal-button" type="submit" disabled={!value}>
          Confirm
          <Add className="modal-icon" />
        </Button>
      </div>
    </form>
  )
}

export default AddModal
