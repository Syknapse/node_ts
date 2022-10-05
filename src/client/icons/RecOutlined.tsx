import SVGIcon from './SVGIcon'
import { IIconProps } from 'src/models/iconModel'

const RecOutlined: React.FC<IIconProps> = props => (
  <SVGIcon {...props}>
    <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
  </SVGIcon>
)

export default RecOutlined
