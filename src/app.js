import { h, render, Component } from "preact";
import Modal from "./modal"

class App extends Component{
  constructor(){
    super()
    this.state = {
      queries: [],
      blurStyle: {backgroundColor: "rgba(0,0,0,0.4)", width: "100vw", height: "100vh", left:"0", top:"0", position:"absolute", zIndex: "999"}
    }
  }

  componentWillMount(){
    this.fetchData()
  }

  onFilterChange(q){
    let { queries } = this.state
    const qSplit = q.split("=")
    if (queries.length === 0) {
      qSplit[0] !== "" ? queries.push(q) : null
    } else {
      let match = 0
      queries.forEach((query, i) => {
        const querySplit = query.split("=")[0]
        if(querySplit === qSplit[0]){
          qSplit[1] !== "" ? queries[i] = q : queries.splice(i, 1)
          match++;
        } else if (i === queries.length-1 && querySplit !== qSplit[0] && qSplit[1] !== "" && match === 0) {
          queries.push(q);
          match++
        }
      })
    }
    // console.log("After", queries);
    this.setState({queries})
  }

  useFilters(){
    const {queries} = this.state
    if (queries) {
      let combinedQuery = ""
      queries.forEach((query, i) => {
        const queryWithPrefix = i === 0 ? `?${query}` : `&${query}`;
        combinedQuery = combinedQuery + queryWithPrefix
      });
      console.log(combinedQuery);
      this.fetchData(combinedQuery, queries)
    }
  }

  fetchData(q, queries){
    q = q ? q : ""
    queries = queries ? queries : [];
    console.log(q);
    const baseUrl = '';
    const id = "";
    const token = ""


    fetch(`${baseUrl}/organizations/${id}/eb/videos${q}`, {
      mode: 'cors',
      headers: {
        'Authorization': 'JWT ' + token
      }
    })
    .then(data => data.json())
    .then(data => this.setState({data : data.data}))
  }

  destroyComponent(){
    document.body.removeChild(document.getElementById("modal"))
  }

  render() {
    return (
      <div id="modal">
        <div
          style={this.state.blurStyle}
          onClick={this.destroyComponent}
        />
        <Modal
          filters={this.state.queries}
          useFilters={this.useFilters.bind(this)}
          onFilterChange={this.onFilterChange.bind(this)}
          videos={this.state.data}
          destroy={this.destroyComponent}
          />
      </div>
    )
  }
}

render(<App />, document.body)
// export default App
