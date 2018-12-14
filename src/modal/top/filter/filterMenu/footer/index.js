import { h } from 'preact'
import Buttons from './buttons'

const FilterMenuFooter = props => {
  return (
    <div>
      <div className="divider" />
      <Buttons onFilterChange={props.onFilterChange} toggleFilterMenu={props.toggleFilterMenu}/>
    </div>
  )
}

export default FilterMenuFooter
