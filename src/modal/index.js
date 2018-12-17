import { h } from "preact";
import Header from "./top"
import Content from "./content"
import FlipbaseLoader from "./FlipbaseLoader"
import "./style.less"

const Modal = props => {
  return (props.videos ?
    <div className="modal">
      <Header />
      <Content
        filters={props.filters}
        videos={props.videos}
      />
    </div> : <div className="modal"><FlipbaseLoader /></div>)
}

export default Modal
