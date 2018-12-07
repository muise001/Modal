import { h } from "preact"

const LoadMore = ({onFilterChange, videos}) => {
  const query = `after=${videos[videos.length - 1].id}`;
  console.log(query);
  return <div className="fakeButton" onClick={() => {onFilterChange(query)}}>Load More</div>
}

export default LoadMore
