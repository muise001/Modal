import { h } from 'preact'
import Close from '../../close'

const FilterMenuHeader = props => {
  return (
    <div>
      <h4> Filter videos by </h4>
      <Close destroy={props.closeFilterMenu} extraStyling={{fontSize: "1rem"}}/>
      <div className="divider" />
    </div>
  )
}

export default FilterMenuHeader
