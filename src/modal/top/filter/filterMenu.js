import { h } from "preact"
import FilterMenuHeader from "./header"
import FilterForm from "./filters"
import FilterMenuFooter from "./footer"

const FilterMenu = props => {
  return (
    <div className="filterMenu">
      <FilterMenuHeader closeFilterMenu={props.closeFilterMenu}/>
      <FilterForm />
      <FilterMenuFooter closeFilterMenu={props.closeFilterMenu} />
    </div>
  )
}

export default FilterMenu


// Dropdown filter
//
//
// Knoppen
//   Apply filter
//   Datepicker -> querystring
//
//
