import { h, Component } from "preact"
import DateInput from "./dateInput"
import RecordedOnInput from "./recordedOnInput"
import PrivacyInput from "./privacyInput"
import AddFilters from "./addFilters"
import MoreFilterFields from "./moreFilterFields"
import "../style.less"

class FilterForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      arr: [],
      dummyShit: ["Last Name", "E-mail address", "First Name", "E-mail address", "First Name", "E-mail address", "First Name"]
    }
  }

  handleChange(e){
    const arr = this.state.arr
    const checkbox = e.target
    const obj = {
      name: checkbox.value,
      id: checkbox.id
    }
    if (checkbox.checked) {
      arr.push(obj)
    }
    else {
      arr.indexOf(obj)
      let index = arr.findIndex(x => x.name === obj.name);
      arr.splice(index, 1)
    }
    this.setState({ arr })
  }

  render(){
    return (
      <form className="filterForm">
        <DateInput />
        <RecordedOnInput />
        <PrivacyInput />
        <MoreFilterFields arr={this.state.arr} />
        <div className="divider" />
        <AddFilters handleChange={this.handleChange.bind(this)} arr={this.state.arr} filterOptions={this.state.dummyShit} />
      </form>
    )}
}

export default FilterForm
