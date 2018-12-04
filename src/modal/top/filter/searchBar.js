import { h } from 'preact'
import "./style.less"

const SearchBar = props => {
  return (
    <div onClick={props.openFilterMenu}>
      <input type="text" id="searchBar" />
      <label htmlFor="submit">
        <img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
      </label>
      <input style={{display: "none"}} id="submit" type="submit" value="zoek" />
    </div>
  )
}

export default SearchBar
