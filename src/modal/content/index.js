import { h } from "preact";
import Videos from "./video"
import LoadMore from "./loadMore"
import ShowFiltersToRemove from "./showFiltersToRemove"

const Content = props => {
  return (
    <div className="contentWrapper">
      <ShowFiltersToRemove filters={props.filters} useFilters={props.useFilters} onFilterChange={props.onFilterChange} />
      <Videos onFilterChange={props.onFilterChange} videos={props.videos} />
      <LoadMore onFilterChange={props.onFilterChange} videos={props.videos} />
    </div>
  )
}

export default Content
