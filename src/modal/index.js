import { h } from "preact";
import Header from "./top"
import Content from "./content"
import Footer from "./bottom"
import FlipbaseLoader from "./FlipbaseLoader"
import "./style.less"

const Modal = props => {
  return (props.videos ?
    <div className="modal">
      <Header
        useFilters={props.useFilters}
        onFilterChange={props.onFilterChange}
        destroy={props.destroy}
      />
      <Content 
        filters={props.filters}
        useFilters={props.useFilters}
        onFilterChange={props.onFilterChange}
        videos={props.videos}
      />
      <Footer />
    </div> : <div className="modal"><FlipbaseLoader /></div>)
}

export default Modal
