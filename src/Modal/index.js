import { h } from "preact";
import FlipbaseLoader from "../Components/flipbaseLoader";
import FilterIcon from './filterIcon';
import Close from '../Components/close';
import "./style.less";

const Modal = ({ children }, { emitter: { emit } }) => {
  return (
    <div className="modal">
      <div className="modalHeader">
        <FilterIcon />
        <Close destroy={()=> emit("close")} extraStyling={{position: "relative", right: "0", padding: "1rem 0"}}/>
      </div>
      { children }
    </div>
  );
}

export default Modal;
