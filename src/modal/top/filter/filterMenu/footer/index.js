import { h } from 'preact'
import Buttons from './buttons'

const FilterMenuFooter = props => {
  return (
    <div>
      <div className="divider" />
      <Buttons useFilters={props.useFilters} toggleFilterMenu={props.toggleFilterMenu}/>
    </div>
  )
}

export default FilterMenuFooter
