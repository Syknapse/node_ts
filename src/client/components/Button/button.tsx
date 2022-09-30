import clsx from 'clsx'
import { Todo } from 'models/todoModel'
import './button.css'

interface IButtonProps {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  isRound?: boolean
  onClick: () => void
}

const Button: React.FC<IButtonProps> = ({ children, className, disabled, isRound, onClick }) => {
  return (
    <button className={clsx(className, isRound && 'round')} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
