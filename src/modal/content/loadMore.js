import { h } from "preact"

const LoadMore = ({onFilterChange, videos, useFilters}) => {
  const query = `before=${videos[videos.length - 1].id}`;
  if (videos.length < 20) {
    return <h3 style={{textAlign: "center"}}>All videos are loaded</h3>
  } else {
    return <div className="fakeButton" onClick={() => {onFilterChange(query, true)}}>Load More</div>
  }
}

export default LoadMore
