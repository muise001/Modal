import SelectVideoModal from './app.js';

const create Instance = () => {
  document.getElementById("openVideoModal").addEventListener("click", ()=> {

    var plugin = SelectVideoModal({
      blurredBackground: true,
      responsive: true,
      maxWidth: 400,
      maxHeight: 300,
      primaryColor: "#FF000",
      textColor: "#000",
      fontFamily: "Times new Roman",

      jsonWebToken: "xyz",
      embedMethod: "responsive_iframe", // "iframe", "javascript"
      maxWidthEmbeddedVideo: 300,
      maxHeigtEmbeddedVideo: 300
    })
    plugin.open()
    plugin.on('videoSelected', (video) => {
    // do something with the video, add to the vacancy text for example
    })
  })
}

export default Instance;
