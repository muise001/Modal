import { h } from "preact"

const PrivacyInput = ({onFilterChange}) => {
  return (
    <div>
      <label htmlFor="recordedOnInput">Privacy</label>
      <div>
        <label htmlFor="privacyInput1">Private</label>
        <input onChange={() => {onFilterChange('privacy=private')}} id="privacyInput1" name="privacyInput" value="private" type="radio"/>
      </div>
      <div>
        <label htmlFor="privacyInput2">Public</label>
        <input onChange={() => {onFilterChange('privacy=public')}} id="privacyInput2" name="privacyInput" value="public" type="radio"/>
      </div>
      <div>
        <label htmlFor="privacyInput3">All</label>
        <input onChange={() => {onFilterChange('privacy=')}} id="privacyInput3" name="privacyInput" value="all" type="radio"/>
      </div>
    </div>
  )
}

export default PrivacyInput
