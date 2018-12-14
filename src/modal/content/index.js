import { h } from "preact";
import Videos from "./video"
import LoadMore from "./loadMore"
import ShowFiltersToRemove from "./showFiltersToRemove"

const Content = props => {
  return (
    <div className="contentWrapper">
      <ShowFiltersToRemove filters={props.filters} onFilterChange={props.onFilterChange} />
      <Videos videoSelected={props.videoSelected} onFilterChange={props.onFilterChange} videos={props.videos} />
      <LoadMore fetchData={props.fetchData} videos={props.videos} />
    </div>
  )
}

export default Content
