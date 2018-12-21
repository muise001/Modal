import { h } from "preact";

const MoreFilterFields = ({arr}, {emitter : {emit}}) => {
  const InputFields = (!arr) ? "" : (
    arr.map(field => {
      const { id } = field
    return (
      <div className="extraFields">
        <label htmlFor={field.id + "Field"}>{field.name}</label>
        <input onChange={(e) => { emit("filterChange", {name: field.id, value: e.target.value}) }} id={field.id + "Field"} type="text" />
      </div>
    )
  }))


  return <div className="extraFields">{InputFields}</div>
}

export default MoreFilterFields
