import { h } from "preact";
import Header from "./top"
import Content from "./content"
import FlipbaseLoader from "./FlipbaseLoader"
import "./style.less"

const Modal = props => {
  return (props.videos ?
    <div className="modal">
      <Header
        onFilterChange={props.onFilterChange}
        destroy={props.destroy}
      />
      <Content
        videoSelected={props.videoSelected}
        fetchData={props.fetchData}
        filters={props.filters}
        onFilterChange={props.onFilterChange}
        videos={props.videos}
      />
    </div> : <div className="modal"><FlipbaseLoader /></div>)
}

export default Modal
