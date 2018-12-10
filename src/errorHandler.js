import { h } from "preact";
import Close from "./modal/top/close"
import "./style.less"

const ErrorHandler = ({error, removeError}) => {
  const className = error ? "show" : ""
  return (
    <div className={`errorHandler ${className}`}>
      <Close destroy={removeError}/>
      <h4 className="errorMessage">{error}</h4>
    </div>
  )
}

export default ErrorHandler
