import { h } from "preact";
import Close from "./close"
import SearchAndFilter from "./filter"

const Header = props => {
  return (
    <header className="modalHeader">
      <SearchAndFilter />
      <Close destroy={props.destroy} />
    </header>
  )
}

export default Header
