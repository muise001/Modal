import { h, Component } from 'preact'

const ShowFiltersToRemove = (props, { getState, emitter : {emit} }) => {
  const state = getState()
  const filters = state.queries;
  let arr = []
  Object.keys(filters).map((filter, i) => {
    if (filters[filter].value && filters[filter].name) { // privacy heeft geen "name" omdat deze niet getoond moet worden
      let display =
        filters[filter].name === "Start" || filters[filter].name === "End"
        ? filters[filter].value.substring(0,10) // Maakt van "2018-12-04T00:00:00.000Z" "2018-12-04"
        : filters[filter].value

      arr.push(
        <div className="filterThatCanBeRemoved" key={i}>
          {`${filters[filter].name}: ${display}`}
          <span
            id={`${filter}`}
            onClick={e => { emit("filterChange", {name: e.target.id, value: ''}) }}
          >
            &#x2716;
          </span>
        </div>
      );
    }})

  const className = arr.length < 1 ? "invisible" : null;

  return <div className={`showFiltersDiv ${className}`}>{arr}</div>;
}

export default ShowFiltersToRemove;
