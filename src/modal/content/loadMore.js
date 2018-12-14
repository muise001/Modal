import { h } from "preact"

const LoadMore = ({fetchData, videos}) => {
  if (!Number.isInteger(videos.length / 20)) {
    return <h3 style={{textAlign: "center"}}>All videos are loaded</h3>
  }
  return <div className="fakeButton" onClick={() => {fetchData(true)}}>Load More</div>
}

export default LoadMore
