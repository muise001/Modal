import { h } from "preact";

const LoadMore = ({fetchData}, {getState, emitter : {emit}}) => {
  const state = getState();

  if (!Number.isInteger(state.data.length / 20)) {
    return <h3 style={{textAlign: "center"}}>All videos are loaded</h3>
  }

  return <div className="fakeButton" onClick={() => {emit("loadMore", true)}}>Load More</div>
}

export default LoadMore
