import { h } from "preact";
import "./style.less"
import LoadMore from "./loadMore"


const Videos = ({ videos, onFilterChange }) => {
  const cards = videos.map(video => {
    video = video.attributes;
    return(
      <section className="card" key={video.player_id}>
        <img
          style={{ width: "10rem" }}
          src={ video.thumbnails[3].url }
          alt={ video.title }
        />
        <p>{ video.title }</p>
      </section>
    );
  });

  return (
    <div className="contentWrapper">
      <div className="gridWrapper">
        {cards}
      </div>
      <LoadMore onFilterChange={onFilterChange} videos={videos} />
    </div>
  )
};

export default Videos
