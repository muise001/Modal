import { h, Component } from 'preact'

class ShowFiltersToRemove extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props);
    let arr = this.props.filters.map(filter => {
      return <p>filter</p>
    })

    return(
      <div className="showFiltersDiv">
        {arr}
      </div>
  )}
}

export default ShowFiltersToRemove
