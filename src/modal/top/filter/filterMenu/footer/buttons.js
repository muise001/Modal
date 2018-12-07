import { h } from 'preact'

const Buttons = props => {
  return (
    <div className="buttons" onClick={props.toggleFilterMenu}>
      <input type="button" value="Cancel"  />
      <input type="button" value="Filter" onClick={props.useFilters}/>
    </div>
  )
}

export default Buttons
