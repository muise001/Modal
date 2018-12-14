import { h, Component } from 'preact'
import FilterMenu from './filterMenu'
import FilterIcon from './FilterIcon'
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
    const className = (this.state.isOpen) ? "open" : "";
    return(
      <div className={`searchForm ${className}`} id="searchForm">
        <FilterIcon toggleFilterMenu={this.toggleFilterMenu.bind(this)}/>
        <FilterMenu
          onFilterChange={this.props.onFilterChange}
          toggleFilterMenu={this.toggleFilterMenu.bind(this)}
        />
      </div>
    )
  }
}
export default SearchAndFilter
