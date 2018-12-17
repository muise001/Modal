import { h } from 'preact'
import "./style.less"

const FilterIcon = (props, { emitter }) => {
  console.log(props);
  return (
    <div onClick={() => emitter.emit("toggleFilterMenu")}>
        <img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
    </div>
  )
}

export default FilterIcon
