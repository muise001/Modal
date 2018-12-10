import { h, render, Component } from "preact";
import Modal from "./modal"
import ErrorHandler from "./errorHandler"

class App extends Component{
  constructor(){
    super()
    this.state = {
      error: "",
      queries: [],
      blurStyle: {backgroundColor: "rgba(0,0,0,0.4)", width: "100vw", height: "100vh", left:"0", top:"0", position:"absolute", zIndex: "999"}
    }
  }

  componentWillMount(){
    this.fetchData()
  }

  // q.after= "xyz";

  onFilterChange(q, changeImmediate){
    let { queries } = this.state
    // let querystring = "?";
    // Object.keys(queries).forEach(prop => {
    //   if (queries.hasOwnProperty(prop))
    //     querystring += `${props}=${queries[prop]}`
    // })
    // querystring
    // let newQueries = queries;
    //
    // Object.keys(q).forEach((prop) => {
    //   newState[prop] = q[prop]
    // })
    //
    // this.setState({
    //   queries: newQueries
    // })


    // TODO: Chane filter query-system
    console.log(q);
    const qSplit = q.split("=")
    if (queries.length === 0) {
      qSplit[1] !== "" ? queries.push(q) : null
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
    console.log("After", queries);
    this.setState({queries})
    changeImmediate ? this.useFilters() : null
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
    const baseUrl = '';
    const id = "";
    const token = ""
    

    fetch(`${baseUrl}/organizations/${id}/eb/videos${q}`, {
      mode: "cors",
      headers: {
        Authorization: "JWT " + token
      }
    })
    .then(resp => {
      if (resp.status < 200 || resp.status >= 400) {
        if (resp.status === 401) {
            this.setState({ error: "Invalid Token, try again later" });
            return;
        }
          this.setState({ error: `error ${resp.status}` });
          return;
      } if (resp.status === 204) {
          this.setState({ error: `no results` });
          return;
      }
      resp.json()
        .then(json => {
          // // TODO: Change filter-query system
          if (queries.length >= 1) {
            queries.forEach(q => {
              const qSplit = q.split("=")
              qSplit[0].includes("before") ? this.setState({data : [...this.state.data, ...json.data]}) : this.setState({data : json.data})
              console.log(this.state.data);
            })
          } else {
            this.setState({data : json.data})
          }
        })

    })
    .catch(error => {
        this.setState({ error: `No internet connection` });
        document.getElementById("modal").innerHTML = `<h1>Some error</h1>`;
        return;
      });
  }

  destroyComponent(){
    document.body.removeChild(document.getElementById("modal"))
  }

  removeError(){
    this.setState({error: ""})
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
        <ErrorHandler
          removeError={this.removeError.bind(this)}
          error={this.state.error}
        />
      </div>
    )
  }
}

render(<App />, document.body)
// export default App
