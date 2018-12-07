import { h } from "preact";

const MoreFilterFields = ({arr}) => {
  const InputFields = (!arr) ? "" : (
    arr.map(field => {
    return (
      <div className="extraFields">
        <label htmlFor={field.id + "Field"}>{field.name}</label>
        <input id={field.id + "Field"} type="text" />
      </div>
    )
  }))


  return <div className="extraFields">{InputFields}</div>
}

export default MoreFilterFields
