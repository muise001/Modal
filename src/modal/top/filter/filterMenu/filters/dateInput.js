import { h, Component } from "preact"

class DateInput extends Component {
  constructor(props){
    super(props)
    this.state = {selectBetween : true}
  }

  handleChange(e){
    const {value} = e.target;
    (value === 'on') ? this.setState({selectBetween : false}) : this.setState({selectBetween : true})
  }

  createValidDateVar(e){
    let { name, value } = e.target
    if (name === "both") {
      const day = value ? new Date(value).toISOString() : ``
      const nextDay = value ? new Date(value) : ``
      value ? nextDay.setDate(new Date(value).getDate()+1) : null
      this.props.onFilterChange(`start=${day}`)
      this.props.onFilterChange(`end=${value ? nextDay.toISOString() : ""}`)
    } else {
      const date = value ? new Date(value).toISOString() : ``
      this.props.onFilterChange(`${name}=${date}`)
    }
  }

  render() {
    const showElement = (!this.state.selectBetween) ? (
      <input name="both" onChange={this.createValidDateVar.bind(this)} type="date"/> ) :
      (
      <div>
        <input name="start" onChange={this.createValidDateVar.bind(this)} type="date" />
        <input name="end" onChange={this.createValidDateVar.bind(this)} type="date" />
      </div>)

    return (
      <div>
        <label htmlFor="dateInput">Date</label>
        <select onChange={this.handleChange.bind(this)}>
          <option value="between">between</option>
          <option value="on">on</option>
        </select>
        {showElement}
      </div>
    )
  }
}

export default DateInput
