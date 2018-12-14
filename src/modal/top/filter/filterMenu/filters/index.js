import { h, Component } from "preact"
import DateInput from "./dateInput"
import AddFilters from "./addFilters"
import MoreFilterFields from "./moreFilterFields"
import "../../style.less"

class FilterForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      arr: [],
      dummyShit: ["First Name", "Last Name", "E-mail address"],
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
      // TODO: Change this for better accesability
      let index = arr.findIndex(x => x.name === obj.name);
      arr.splice(index, 1)
    }
    this.setState({ arr })
  }

  render(){
    return (
      <div>
        <form className="filterForm">
          <DateInput onFilterChange={this.props.onFilterChange} />
          <MoreFilterFields onFilterChange={this.props.onFilterChange} arr={this.state.arr} />
        </form>
        <div className="divider" />
        <AddFilters handleChange={this.handleChange.bind(this)} arr={this.state.arr} filterOptions={this.state.dummyShit} />
      </div>
    )}
}

export default FilterForm
