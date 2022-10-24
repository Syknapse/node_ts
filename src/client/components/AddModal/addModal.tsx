import React, { useState } from 'react'
import clsx from 'clsx'
import { Todo } from 'models/todoModel'
import { Button } from '../../components'
import { Add } from '../../icons'
import './addModal.css'

interface IAddModalProps {
  isOpen: boolean
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  editedTodo: Todo | null
  close: () => void
  submit: () => void
}

const AddModal: React.FC<IAddModalProps> = ({ isOpen, value, setValue, editedTodo, close, submit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submit()
    close()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)

  return (
    <form className={clsx('add-modal', isOpen && 'open')} onSubmit={handleSubmit}>
      <div className="backdrop" onClick={close}></div>
      <div className="modal">
        <h2 className="modal-title">{!!editedTodo ? 'Edit your todo' : 'Add your todo'}</h2>
        <input className="modal-input" type="text" onChange={handleChange} value={value} />
        <Button className="modal-button" type="submit" disabled={!value || editedTodo?.text === value}>
          Confirm
          <Add className="modal-icon" />
        </Button>
      </div>
    </form>
  )
}

export default AddModal
