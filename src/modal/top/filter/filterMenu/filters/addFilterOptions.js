import { h } from 'preact'

const AddFilterOptions = ({filterOptions, isOpen}, {emitter: {emit}}) => {
  // Rename "First name" to "first_name" and "E-mail Address" to "email" (for filterquery fields[email])
  const options = filterOptions.map((option) => {
  let id = option.toLowerCase().replace(/ /g, "_")
  id = id.replace("-", "")
  id.includes("_address") ? id = id.split("_address")[0] : null


    return (
      <div>
        <label htmlFor={id}>{option}</label>
        <input id={id} value={option} type="checkbox" onChange={(e) => {emit("handleExtraFilterCheckbox", e)}}/>
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
