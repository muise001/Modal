import { h } from 'preact'
import "./style.less"

const FilterIcon = (props, { emitter }) => {
  return (
    <img
      onClick={() => {emitter.emit("toggleFilterMenu")}}
      style={{ height: "4rem", marginLeft: "-1.3rem", marginTop: "0.3rem"}}
      class="search-icon"
      src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
    />
  )
}

export default FilterIcon
