import { h } from 'preact'

const Buttons = (props, { emitter: {emit} }) => {
  return (
    <div className="buttons" onClick={() => {emit("toggleFilterMenu")}}>
      <input type="button" value="Cancel"  />
      <input type="submit" value="Filter" onClick={(e) => emit("onFilterChange", "", true, e)}/>
    </div>
  )
}

export default Buttons
