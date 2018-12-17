import { h } from "preact";
import Videos from "./video"
import LoadMore from "./loadMore"
import ShowFiltersToRemove from "./showFiltersToRemove"

const Content = props => {
  return (
    <div className="contentWrapper">
      <ShowFiltersToRemove filters={props.filters} />
      <Videos videos={props.videos} />
      <LoadMore videos={props.videos} />
    </div>
  )
}

export default Content
