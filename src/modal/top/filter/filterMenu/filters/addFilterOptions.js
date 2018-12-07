import { h } from 'preact'

const AddFilterOptions = ({filterOptions, isOpen, handleChange}) => {
  const options = filterOptions.map((option) => {
  const id = option.toLowerCase().replace(/ /g, "_")
    return (
      <div>
        <label htmlFor={id}>{option}</label>
        <input id={id} value={option} type="checkbox" onChange={handleChange}/>
      </div>
  )
  })

  return (
    <section className={`inside_custom_select ${(isOpen ? "" : "hidden")}`}>
      {options}
    </section>
  )
}

export default AddFilterOptions


// <section className={`inside_custom_select ${(this.state.isOpen ? "" : "hidden")}`}>
//   <label htmlFor="romantisch">Romantisch</label>
//   <input id="romantisch" value="romantisch" type="checkbox" />
//   <label htmlFor="detective">Detective</label>
//   <input id="detective" type="checkbox" />
//   <label htmlFor="humor">Humor</label>
//   <input id="humor" type="checkbox" />
//   <label htmlFor="appel">appel</label>
//   <input id="appel" type="checkbox" />
//   <label htmlFor="peer">peer</label>
//   <input id="peer" type="checkbox" />
//   <label htmlFor="banaan">banaan</label>
//   <input id="banaan" type="checkbox" />
// </section>
