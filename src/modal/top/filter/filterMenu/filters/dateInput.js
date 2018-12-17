import { h, Component } from "preact"

class DateInput extends Component {
  constructor(props){
    super(props)
    this.state = {selectBetween : true}
    this.createValidDateVar = this.createValidDateVar.bind(this)
  }

  handleChange(e){
    const { value } = e.target;
    (value === 'on') ? this.setState({selectBetween : false}) : this.setState({selectBetween : true})
  }

  createValidDateVar(e) {
    const { name, value } = e.target;
    const { emit } = this.context.emitter;
    console.log(name, value);
    if (name === "both") {
      // check dag en volgende dag
      const day = value ? new Date(value).toISOString() : ``
      const nextDay = value ? new Date(value) : ``
      value ? nextDay.setDate(new Date(value).getDate()+1) : null
      emit("onFilterChange", "start=" + day)
      emit("onFilterChange", "end=" + value ? nextDay.toISOString() : "")
    } else {
      const date = value ? new Date(value).toISOString() : ``
      emit("onFilterChange",`${name}=${date}`)
    }
  }

  render() {
    const { createValidDateVar, handleChange } = this
    const showElement = (!this.state.selectBetween) ? (
      <input name="both" onChange={createValidDateVar} type="date"/> ) : (
      <div>
        <input name="start" onChange={createValidDateVar} type="date" />
        <input name="end" onChange={createValidDateVar} type="date" />
      </div>)

    return (
      <div>
        <label htmlFor="dateInput">Date</label>
        <select onChange={handleChange.bind(this)}>
          <option value="between">between</option>
          <option value="on">on</option>
        </select>
        {showElement}
      </div>
    )
  }
}

export default DateInput
