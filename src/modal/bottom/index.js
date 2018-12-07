import { h, Component } from "preact";
import InfoButton from "./infoButton"
import InfoPopup from "./infoPopup"
import "./style.less"

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = { isPopupOpen: false }
  }

  togglePopup(){
    console.log("togglesd");
    this.setState({isPopupOpen : !this.state.isPopupOpen})
  }

  render(){
  return (
    <footer className="modalFooter">
      <InfoButton togglePopup={this.togglePopup.bind(this)} />
      <InfoPopup isOpen={this.state.isPopupOpen} />
    </footer>
  )
  }
}
export default Footer
