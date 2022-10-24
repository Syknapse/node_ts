import clsx from 'clsx'
import './button.css'

interface IButtonProps {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  isRound?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (event?: React.MouseEvent) => void
}

const Button: React.FC<IButtonProps> = ({ children, className, disabled, isRound, type, onClick }) => {
  return (
    <button className={clsx(className, 'button', isRound && 'round')} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
