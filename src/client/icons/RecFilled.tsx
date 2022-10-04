import SVGIcon from './SVGIcon'
import { IIconProps } from 'src/models/iconModel'

const RecFilled: React.FC<IIconProps> = props => (
  <SVGIcon {...props}>
    <circle cx="12" cy="12" r="12" />
  </SVGIcon>
)

export default RecFilled
