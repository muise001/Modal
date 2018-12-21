import { h, Component } from 'preact';
import AddFilterOptions from './addFilterOptions';
import MoreFilterFields from './moreFilterFields';
import "./style.less";

class AddFilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen : false,
    }
  }

  toggleAddFilterMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="extraFields">
        <label>Extra Filters</label>
        <section className={`custom_select ${(!this.state.isOpen ? "" : "rotate")}`}>
          <p onClick={this.toggleAddFilterMenu.bind(this)}>Add Filter</p>
          <AddFilterOptions handleChange={this.props.handleChange} isOpen={this.state.isOpen} filterOptions={this.props.filterOptions}/>
        </section>
      </div>
    );
  }
}

export default AddFilters;
