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

  render(){
    const showElement = (!this.state.selectBetween) ? (
      <input onChange={(e) => {this.props.onFilterChange(`start=${new Date(e.target.value).toISOString()}`)}} type="date"/> ) :
      (
      <div>
        <input onChange={(e) => {this.props.onFilterChange(`start=${new Date(e.target.value).toISOString()}`)}} type="date" />
        <input onChange={(e) => {this.props.onFilterChange(`end=${new Date(e.target.value).toISOString()}`)}} type="date" />
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
