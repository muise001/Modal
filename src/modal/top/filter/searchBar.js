import { h } from 'preact'
import "./style.less"

const SearchBar = props => {
  return (
    <div onClick={props.toggleFilterMenu}>
        <img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
    </div>
  )
}

export default SearchBar
