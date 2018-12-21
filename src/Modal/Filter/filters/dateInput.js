import { h, Component } from "preact";

class DateInput extends Component {
  constructor(props){
    super(props);

    this.state = { selectBetween : true };

    this.createValidDateVar = this.createValidDateVar.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;

    (value === 'on') ? this.setState({selectBetween : false}) : this.setState({selectBetween : true})
  }

  createValidDateVar({ target: { name, value }}) {
    const { emit } = this.context.emitter;
    const day = value ? new Date(value).toISOString() : '';

    if (name === "both") {
      const nextDay = value ? new Date(value) : ''
      value ? nextDay.setDate(new Date(value).getDate()+1) : ''
      emit("filterChange", {name: "start", value: day})
      emit("filterChange", {name: "end", value: value ? nextDay.toISOString() : ''})
    } else {
      emit("filterChange", {name: name, value: day})
    }
  }

  render() {
    const { createValidDateVar, handleChange } = this;
    const showElement = (!this.state.selectBetween) ? (
      <div className="dates">
        <input name="both" onChange={createValidDateVar} type="date"/>
      </div> )
      : (
      <div className="dates">
        <input name="start" onChange={createValidDateVar} type="date" />
        <input name="end" onChange={createValidDateVar} type="date" />
      </div>
    );

    return (
      <div>
        <label htmlFor="dateInput">Date</label>
        <select onChange={handleChange.bind(this)}>
          <option value="between">between</option>
          <option value="on">on</option>
        </select>
        {showElement}
      </div>
    );
  }
}

export default DateInput;
