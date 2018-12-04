import { h, Component } from 'preact'
import FilterMenu from './filterMenu'
import SearchBar from './searchBar'
import "./style.less"

class SearchAndFilter extends Component {
  constructor(props){
    super(props)
    this.state = {isOpen: false}
  }

  openMenu(){
    this.setState({isOpen: true})
  }

  closeMenu(){
    this.setState({isOpen: false})
  }

  render(){
    const className = (this.state.isOpen) ? "open " : "";
    return(
      <form className={`searchForm ${className}`} id="searchForm">
        <SearchBar openFilterMenu={this.openMenu.bind(this)}/>
        <FilterMenu isOpen={this.state.isOpen} closeFilterMenu={this.closeMenu.bind(this)}/>
      </form>
    )
  }
}
export default SearchAndFilter
