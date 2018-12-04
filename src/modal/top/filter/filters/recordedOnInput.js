import { h } from "preact"

const RecordedOnInput = props => {
  return (
    <div>
      <label htmlFor="recordedOnInput">Recorded On</label>
      <select placeholder="page">
        <option> page </option>
        <option value="1"> Dummy option 1 </option>
        <option value="2"> Dummy option 2 </option>
        <option value="3"> Dummy option 3 </option>
      </select>
    </div>
  )
}

export default RecordedOnInput
