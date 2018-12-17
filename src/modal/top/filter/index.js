import { h, Component } from 'preact'
import FilterMenu from './filterMenu'
import FilterIcon from './FilterIcon'
import "./style.less"

class SearchAndFilter extends Component {
  constructor(props, context){
    super(props)
    this.state = {isOpen: false}
    context.emitter.on("toggleFilterMenu", this.toggleFilterMenu.bind(this))
  }

  toggleFilterMenu(){
    this.setState({isOpen: !this.state.isOpen})
  }

  render(){
    const className = (this.state.isOpen) ? "open" : "";
    return(
      <div className={`searchForm ${className}`} id="searchForm">
        <FilterIcon />
        <FilterMenu />
      </div>
    )
  }
}
export default SearchAndFilter
