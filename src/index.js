import { render, h } from 'preact'
import App from './app'
import Flipbase from "expose-loader?Flipbase!./namespace.js";
import EventEmitter from "uevents";

function SelectVideoModal(options) {
  let root;
  const emitter = new EventEmitter()

  // unmount on click
  emitter.on("video", function () {
    emitter.emit("close");
  })

  emitter.on("close", function () {
    render(() => null, document.body, root)
  })
  
  return {
    open: function(){
      root = render(<App options={options} emitter={emitter} />, document.body);
    },
    on: function(evt, listener) {
      emitter.on(evt, listener)
    }
  }
}

Flipbase.SelectVideoModal = SelectVideoModal;

module.exports = Flipbase;
