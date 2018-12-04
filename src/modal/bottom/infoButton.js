import { h } from "preact"

const infoButton = props => {
  const buttonStyle = {
    width: "4rem",
    position: "absolute",
    top: "1rem",
    right: "0",
    cursor: "pointer"
  }

  return <img style={buttonStyle} src="https://banner2.kisspng.com/20180811/xv/kisspng-question-mark-trademark-symbol-vector-graphics-com-privacygrade-5b6ea22c76c728.1587327415339771324865.jpg" />
}

export default infoButton
