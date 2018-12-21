import { h, Component } from "preact";
import Modal from "./modal"
import ErrorHandler from "./errorHandler"
import Content from "./Modal/Content"
import Filter from "./Modal/Filter"
import Provider from 'preact-context-provider';
import { baseURL, orgId, token, handleFetchError, config, handleJson } from "./Utils/fetch"
import { queryBuilder } from './Utils/queryBuilder'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data : [],
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
      isLoading: false,
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
          name: "First name",
          fields: true
        },
        last_name: {
          value: "",
          name: "Last name",
          fields: true
        },
        email: {
          value: "",
          name: "e-mail",
          fields: true
        }
      }
    }
    const { emitter } = this.props;
    emitter.on('filterChange', this.filterChange.bind(this))
    emitter.on('loadMore', this.fetchData.bind(this))
    emitter.on('removeError',this.removeError.bind(this))
  }

  // Haal data op voor de eerste keer
  componentWillMount(){
    this.setState({ init : this.props.options })
    this.fetchData()
  }

  componentDidMount(){
    const { primaryColor, fontFamily, textColor } = this.state.init
    const modal = document.querySelector("#modal")
    modal.style.setProperty("--FlipbaseVideoPickerPrimaryColor", primaryColor)
    modal.style.setProperty("--FlipbaseVideoPickerTextColor", textColor)
    modal.style.setProperty("--FlipbaseVideoPickerFontFamily", `${fontFamily}, sans-serif`)
  }

  // Als er een filter verandert, wordt hij hier toegevoegd, verwijderd of overschreven
  filterChange({ name, value }){
    console.log(name, value)
    this.setState({
      ...this.state,
      queries: {
        ...this.state.queries,
        [name]: {
          ...this.state.queries[name],
          value
        }
      }
    })
    console.log(this.state.queries);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.queries !== this.state.queries) {
      this.fetchData()
    }
  }

  fetchData(showMore){
    this.setState({isLoading: true})
    const {data} = this.state
    const lastVidId = data.length >= 1 ? data[data.length-1].id : ""
    const q = queryBuilder(showMore, this.state.queries, lastVidId)

    fetch(`${baseURL}/organizations/${orgId}/eb/videos${q}`, config)
    .then(handleFetchError)
    .then(handleJson)
    .then(json => {
      showMore
      ? this.setState({data : [...this.state.data, ...json.data], isLoading: false})
      : this.setState({data : json.data, isLoading: false})
    })
    .catch(error => {
        this.setState({ error: `No internet connection`, isLoading: false });
        return;
    });
  }

  removeError(){
    this.setState({error: ""})
  }

  getState() {
    return this.state;
  }

  render() {
    const { emit } = this.props.emitter;
    const { queries, data, error, init } = this.state
    const blurredBackground = !init.blurredBackground ? "none" : null
    return (
      <Provider emitter={this.props.emitter} getState={this.getState.bind(this)}>
        <div id="modal">
          <div className={`blurredBackground ${blurredBackground}`} onClick={() => emit("close")} />
          <Modal>
            <Filter />
            <Content />
          </Modal>
          <ErrorHandler/>
        </div>
      </Provider>
    )
  }
}

export default App
