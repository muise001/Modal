import { h, Component } from "preact"
import FilterMenuHeader from "./filterHeader"
import FilterForm from "./filters"
import FilterMenuFooter from "./filterFooter"
import "./style.less"

class FilterMenu extends Component {
  constructor(props, context){
    super(props);

    this.state = { isOpen: false };
    context.emitter.on("toggleFilterMenu", this.toggleFilterMenu.bind(this));
  }

  toggleFilterMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className={`filterMenu ${isOpen ? "open" : ""}`}>
        <FilterMenuHeader />
        <FilterForm />
        <FilterMenuFooter />
      </div>
    );
  }
}

export default FilterMenu;
