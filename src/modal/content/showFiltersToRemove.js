import { h, Component } from 'preact'

const ShowFiltersToRemove = ({ filters }, { emitter : {emit} }) => {
  let arr = []
  // dostuff(filters)
  // dostuff.map((el, i) => {
  //   <div className="filterThatCanBeRemoved">
  //     {`${el.name}: ${display}`}
  //     <span
  //       id={`${keys[i]}`}
  //       onClick={e => { onFilterChange(`${e.target.id}=`, true) }}
  //     >
  //       &#x2716;
  //     </span>
  //   </div>
  // })
  Object.keys(filters).map((filter, i) => {
    let keys = Object.keys(filters)
    if (filters[filter].value && filters[filter].name) { // privacy heeft geen "name" omdat deze niet getoond moet worden
      let display = filters[filter].name === "Start" || filters[filter].name === "End"
      ? filters[filter].value.substring(0,10) // Maakt van "2018-12-04T00:00:00.000Z" "2018-12-04"
      : filters[filter].value
      arr.push(
        <div className="filterThatCanBeRemoved">
          {`${filters[filter].name}: ${display}`}
          <span
            id={`${keys[i]}`}
            onClick={e => { emit("onFilterChange", `${e.target.id}=`, true) }}
          >
            &#x2716;
          </span>
        </div>
      );
    }})

  const className = arr.length < 1 ? "invisible" : null
  return <div className={`showFiltersDiv ${className}`}>{arr}</div>;
}

export default ShowFiltersToRemove
