import { h } from 'preact'
import "./style.less"

const Close = ({ destroy, extraStyling }) => {
  const style = extraStyling ? extraStyling : `{}`;
  return <p className="closeButton" style={style} onClick={destroy}>x</p>
}

export default Close
