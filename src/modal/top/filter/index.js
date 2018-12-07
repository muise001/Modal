import { h, Component } from 'preact'
import FilterMenu from './filterMenu'
import SearchBar from './searchBar'
import "./style.less"

class SearchAndFilter extends Component {
  constructor(props){
    super(props)
    this.state = {isOpen: false}
  }

  toggleFilterMenu(){
    this.setState({isOpen: !this.state.isOpen})
  }

  render(){
    const className = (this.state.isOpen) ? "open " : "";
    return(
      <div className={`searchForm ${className}`} id="searchForm">
        <SearchBar toggleFilterMenu={this.toggleFilterMenu.bind(this)}/>
        <FilterMenu
          onFilterChange={this.props.onFilterChange}
          toggleFilterMenu={this.toggleFilterMenu.bind(this)}
          useFilters={this.props.useFilters}
          />
      </div>
    )
  }
}
export default SearchAndFilter
