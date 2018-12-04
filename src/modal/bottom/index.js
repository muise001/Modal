import { h } from "preact";
import InfoButton from "./infoButton"

const Footer = props => {
  const footerStyle = {
    width: "100%",
    height: "3rem",
    position: "absolute",
    bottom: "1rem",
    fontFamily: "sans-serif",
    textAlign: "center"
  }

  return (
    <footer style={footerStyle}>
      <InfoButton />
    </footer>
  )
}

export default Footer
