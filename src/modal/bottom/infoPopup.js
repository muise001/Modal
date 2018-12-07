import { h } from 'preact'

const InfoPopup = props => {
  return !props.isOpen ? <div/> : (
    <div className="popupContainer">
      hallo
    </div>
  )
}

export default InfoPopup
