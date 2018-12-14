import { h } from "preact";
import "./style.less"


const Videos = ({ videos, onFilterChange, videoSelected }) => {
  console.log(videoSelected);
  const cards = videos.map((video, i) => {
    const maxLength = 32
    const showTitle = video.attributes.title.length >= maxLength ? video.attributes.title.substring(0, maxLength) + "..." : video.attributes.title

    return(
      <section className="card" key={video.player_id} id={video.id} onClick={(e)=> {videoSelected.emit("video", videos[i])}}>
        <img
          style={{ width: "10rem" }}
          src={ video.attributes.thumbnails[3].url }
          alt={ showTitle }
        />
        <p>{ showTitle }</p>
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
