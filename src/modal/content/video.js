import { h } from "preact";
import "./style.less"


const Videos = ({ videos, onFilterChange }) => {
  const cards = videos.map(video => {
    return(
      <section className="card" key={video.player_id} id={video.id} onClick={(e)=> {console.log(`https://app.flipbase.com/share/${video.attributes.video}`)}}>
        <img
          style={{ width: "10rem" }}
          src={ video.attributes.thumbnails[3].url }
          alt={ video.attributes.title }
        />
        <p>{ video.attributes.title }</p>
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
