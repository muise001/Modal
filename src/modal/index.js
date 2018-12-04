import { h } from "preact";
import Header from "./top"
import Content from "./content"
import Footer from "./bottom"
import "./style.less"

const Modal = props => {
  return ((props.videos) ?
    <div className="modal">
      <Header destroy={props.destroy}/>
      <Content videos={props.videos} />
      <Footer />
    </div> : <h1 className="modal">Loading</h1>)
}

export default Modal
