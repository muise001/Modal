import { h } from 'preact'

const Buttons = props => {
  return (
    <div className="buttons">
      <input type="button" value="Cancel" onClick={props.closeFilterMenu} />
      <input type="submit" value="Filter" />
    </div>
  )
}

export default Buttons
