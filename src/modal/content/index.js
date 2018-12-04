import { h } from "preact";
import Videos from "./video"

const Content = props => {
  return (
    <div>
      <Videos videos={props.videos} />
    </div>
  )
}

export default Content
