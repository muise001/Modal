import { h } from "preact";
import Videos from "./video"

const Content = props => {
  return (
    <div>
      <Videos onFilterChange={props.onFilterChange} videos={props.videos} />
    </div>
  )
}

export default Content
