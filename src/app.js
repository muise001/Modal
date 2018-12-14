import { h, render, Component } from "preact";
import Modal from "./modal"
import ErrorHandler from "./errorHandler"

class App extends Component{
  constructor(){
    super()
    this.state = {
      init: {
        blurredBackground: true,
        responsive: true,
        maxWidth: 400,
        maxHeight: 300,
        primaryColor: "#FF000",
        textColor: "#000",
        fontFamily: "Times new Roman",
        jsonWebToken: "xyz",
        embedMethod: "responsive_iframe", // "iframe", "javascript"
        maxWidthEmbeddedVideo: 300,
        maxHeigtEmbeddedVideo: 300
      },
      error: "",
      queries: {
        privacy: {
          value: "public"
        },
        start: {
          value: "",
          name: "Start"
        },
        end: {
          value: "",
          name: "End"
        },
        first_name: {
          value: "",
          name: "First name"
        },
        last_name: {
          value: "",
          name: "Last name"
        },
        email: {
          value: "",
          name: "e-mail"
        }
      }
    }
  }

  // Haal data op voor de eerste keer
  componentWillMount(){
    this.setState({ init : this.props.options })
    this.fetchData()
  }

  // Als er een filter verandert, wordt hij hier toegevoegd, verwijderd of overschreven
  onFilterChange(q, changeImmediate){
    let { queries } = this.state
    Object.keys(queries).forEach(prop => {
      if (q.split("=")[0] === prop) {
        queries[prop].value = q.split("=")[1]
      }
    })
    this.setState({ queries });
    !changeImmediate ? null : this.fetchData()
  }

  // Hier wordt de query-string gemaakt
  useFilters(showMore){
    const { queries } = this.state
    let str = ""
    Object.keys(queries).forEach((prop, i) => {
      let keys = Object.keys(queries)
      if (queries[prop].value){
        // Als er een waarde is aangeklikt waar "fields[] omheen moet in de querystring, wordt hij hier toegevoegd"
        keys[i] = keys[i] === "first_name" || keys[i] === "last_name" || keys[i] === "email" ? `fields[${keys[i]}]` : keys[i];
        const query = `${keys[i]}=${queries[prop].value}`
        str += str.length === 0 ? `?${query}` : `&${query}`
        console.log(str);
      }
    })
    str += !showMore ? "" : (str = str.length === 0 ? `?before=${this.state.data[this.state.data.length-1].id}` : `&before=${this.state.data[this.state.data.length-1].id}`)
    return str
  }

  fetchData(showMore){
    const q = this.useFilters(showMore)
    const baseUrl = 'https://app.flipbase.com/api';
    const id = "";
    const token = "";

    fetch(`${baseUrl}/organizations/${id}/eb/videos${q}`, {
      mode: "cors",
      headers: {
        Authorization: "JWT " + token
      }
    })
    .then(resp => {
      // Check of er een fout is
      if (resp.status < 200 || resp.status >= 400) {
        // foutafhandeling
        if (resp.status === 401) {
            this.setState({ error: "Invalid Token, try again later" });
            return;
        }
          // onbekende fout
          this.setState({ error: `error ${resp.status}` });
          return;
      } if (resp.status === 204) {
          this.setState({ error: `no results` });
          return;
      }
      resp.json()
        .then(json => {
          console.log(json.data);
          showMore ? this.setState({data : [...this.state.data, ...json.data]}) : this.setState({data : json.data})
          console.log(this.state.data);
        })
    })
    .catch(error => {
        this.setState({ error: `No internet connection` });
        document.getElementById("modal").innerHTML = `<h1>Some error</h1>`;
        return;
      });
  }

  removeError(){
    this.setState({error: ""})
  }

  render() {
    const { emit } = this.props.emitter;
    const blurredBackground = !this.state.init.blurredBackground ? "none" : null
    return (
      <div id="modal">
        <div
          className={`blurredBackground ${blurredBackground}`}
          onClick={() => emit("close")}
        />
        <Modal
          videoSelected={this.props.emitter}                // Voor klik op video
          filters={this.state.queries}                      // Voor showFiltersToRemove
          fetchData={this.fetchData.bind(this)}             // Voor loadmore en ShowFiltersToRemove
          onFilterChange={this.onFilterChange.bind(this)}   // Voor filters
          videos={this.state.data}                          // Om videos te kunnen tonen
          destroy={() => emit("close")}                     // Om Modal te destroyen
        />
        <ErrorHandler
          removeError={this.removeError.bind(this)}         // Verwijder error (geen resultaten bijvoorbeeld)
          error={this.state.error}                          // Toon error
        />
      </div>
    )
  }
}

// render(<App />, document.body)
export default App
