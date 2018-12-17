class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queries:{

      }
    }
    emitter.on('updateFilters', this.updateFilters)
    emitter.on('loadMore', this.loadMore)
  }

  updateFilters(queryies) {
    // do shit with queries
    this.setState({ queries })
  }

  render() {
    return (
      <Provider emitter={emitter}>
        <Modal>
          <FilterMenu />
          <SelectedFilters />
          <Videos />
          <LoadMoreButton />
        </Modal>
      </Provider>
    )
  }
}
