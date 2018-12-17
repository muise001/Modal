import { h, Component } from "preact"
import DateInput from "./dateInput"
import AddFilters from "./addFilters"
import MoreFilterFields from "./moreFilterFields"
import "../../style.less"

class FilterForm extends Component {
  constructor(props, context){
    super(props)
    this.state = {
      arr: [],
      extraFilters: ["First Name", "Last Name", "E-mail address"],
    }
    context.emitter.on("handleExtraFilterCheckbox", this.handleChange.bind(this))
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

  handleSubmit(e){
    e.preventDefault()
    const { emit } = this.context.emitter
    emit("onFilterChange", "", true)
    emit("toggleFilterMenu")
  }

  render(){
    return (
      <div>
        <form className="filterForm" onSubmit={this.handleSubmit.bind(this)}>
          <DateInput />
          <MoreFilterFields arr={this.state.arr} />
        </form>
        <div className="divider" />
        <AddFilters arr={this.state.arr} filterOptions={this.state.extraFilters} />
      </div>
    )}
}

export default FilterForm
