import { h } from "preact";
import Close from "./close"
import FilterIcon from "./filter"

const Header = props => {
  return (
    <header className="modalHeader">
      <FilterIcon onFilterChange={props.onFilterChange} />
      <Close destroy={props.destroy} />
    </header>
  )
}

export default Header
