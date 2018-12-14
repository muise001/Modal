import { h, Component } from 'preact'

const ShowFiltersToRemove = ({ filters, onFilterChange }) => {
  let arr = []
  Object.keys(filters).map((filter, i) => {
    let keys = Object.keys(filters)
    if (filters[filter].value && filters[filter].name) {
      let display = filters[filter].name === "Start" || filters[filter].name === "End" ? filters[filter].value.substring(0,10) : filters[filter].value
      arr.push(<div className="filterThatCanBeRemoved">{`${filters[filter].name}: ${display}`} <span id={`${keys[i]}`} onClick={(e) => {onFilterChange(`${e.target.id}=`, true)}}>&#x2716;</span></div>)
    }})

  const className = arr.length < 1 ? "invisible" : null
  return <div className={`showFiltersDiv ${className}`}>{arr}</div>;
}

export default ShowFiltersToRemove
