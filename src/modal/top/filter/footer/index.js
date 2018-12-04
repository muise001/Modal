import { h } from 'preact'
import Buttons from './buttons'

const FilterMenuFooter = props => {
  return (
    <div>
      <div className="divider" />
      <Buttons closeFilterMenu={props.closeFilterMenu}/>
    </div>
  )
}

export default FilterMenuFooter
