import { h, render, Component } from "preact";
import Modal from "./modal"

class App extends Component{
  constructor(){
    super()
    this.state = {
      blurStyle: {backgroundColor: "rgba(0,0,0,0.4)", width: "100vw", height: "100vh", left:"0", top:"0", position:"absolute", zIndex: "999"},
    }
  }

  componentWillMount(){
    const baseUrl = 'https://app.flipbase.com/api';
    const id = "";
    const token = ""

    fetch(`${baseUrl}/organizations/${id}/eb/videos`, {
      mode: 'cors',
      headers: {
        'Authorization': 'JWT ' + token
      }
    })
    .then(data => data.json())
    .then(data => this.setState({data : data.data}))
  }

  destroyComponent(){
    document.body.removeChild(document.getElementById("modal"))
  }

  render() {
    return (
      <div id="modal">
        <div
          style={this.state.blurStyle}
          onClick={this.destroyComponent}
        />
        <Modal videos={this.state.data} destroy={this.destroyComponent} />
      </div>
    )
  }
}

render(<App />, document.body)
// export default App
