import { h } from "preact";
import Close from "./close"
import SearchAndFilter from "./filter"

const Header = props => {
  return (
    <header className="modalHeader">
      <SearchAndFilter useFilters={props.useFilters} onFilterChange={props.onFilterChange} />
      <Close destroy={props.destroy} />
    </header>
  )
}

export default Header
