import { h } from 'preact';

const FilterMenuFooter = (props, { emitter: { emit } }) => {
  return (
    <div>
      <div className="divider" />
      <div className="buttons" onClick={() => {emit("toggleFilterMenu")}}>
        <input type="button" value="Cancel"  />
        <input type="submit" value="Filter" onClick={(e) => emit("onFilterChange", "", true, e)}/>
      </div>
    </div>
  );
}

export default FilterMenuFooter;
