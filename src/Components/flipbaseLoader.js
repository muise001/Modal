import { h } from "preact"
import "./loader.less"

const FlipbaseLoader = props => {
  return (
    <div id="loader-container">
      <div id="flipbase-loader">
        <div className="tilt">
          <div id="bar1" />
          <div id="bar2" />
          <div id="bar3" />
        </div>
      </div>
      <h4>Loading</h4>
    </div>
  )
}

export default FlipbaseLoader
