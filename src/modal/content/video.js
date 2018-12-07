import { h } from "preact";
import "./style.less"


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
  <div className="gridWrapper">
    {cards}
  </div>
  )
};

export default Videos
