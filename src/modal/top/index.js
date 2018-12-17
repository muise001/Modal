import { h } from "preact";
import Close from "./close"
import FilterIcon from "./filter"

const Header = (props, {emitter: {emit}}) => {
  return (
    <header className="modalHeader">
      <FilterIcon />
      <Close destroy={() => {emit("close")}} />
    </header>
  )
}

export default Header
