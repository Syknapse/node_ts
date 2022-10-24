import clsx from 'clsx'
import { Button } from '../../components'
import { Cross } from '../../icons'
import './snackBar.css'

interface ISnackBarProps {
  message: string | undefined
  action?: () => void
  close: () => void
}

const SnackBar: React.FC<ISnackBarProps> = ({ message, action, close }) => {
  return (
    <div className="snackbar">
      <span>{message}</span>
      {action && (
        <Button className="snackbar-undo" onClick={action}>
          UNDO
        </Button>
      )}
      <Button className="snackbar-close" isRound onClick={close}>
        <Cross />
      </Button>
    </div>
  )
}

export default SnackBar
