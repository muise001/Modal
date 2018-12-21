import { h } from "preact";
import "./style.less"


const Videos = (props, {getState, emitter: {emit}}) => {
  const state = getState()
  const cards = state.data.map((video) => {
    const maxLength = 32
    const showTitle = video.attributes.title.length >= maxLength ? video.attributes.title.substring(0, maxLength) + "..." : video.attributes.title

    return(
      <section className="card" key={video.player_id} id={video.id} onClick={()=> emit("video", video)}>
        <img
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
