import { h } from "preact"
import FilterMenuHeader from "./header"
import FilterForm from "./filters"
import FilterMenuFooter from "./footer"

const FilterMenu = props => {
  return (
    <div className="filterMenu">
      <FilterMenuHeader toggleFilterMenu={props.toggleFilterMenu}/>
      <FilterForm onFilterChange={props.onFilterChange}/>
      <FilterMenuFooter
        onFilterChange={props.onFilterChange}
        toggleFilterMenu={props.toggleFilterMenu}
      />
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
