import { h, Component } from 'preact'

class ShowFiltersToRemove extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let arr = this.props.filters.map(filter => {
      let fSplit = filter.split("=")
      fSplit[0] === "start" || fSplit[0] === "end" ? fSplit[1] = fSplit[1].substring(0,10) : null
      return <div className="filterThatCanBeRemoved">{`${fSplit[0]}: ${fSplit[1]}`} <span id={`${fSplit[0]}`} onClick={(e) => {this.props.onFilterChange(`${e.target.id}=`, true)}}>&#x2716;</span></div>
    })

    return <div className="showFiltersDiv">{arr}</div>;
  }
}

export default ShowFiltersToRemove
