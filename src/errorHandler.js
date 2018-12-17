import { h } from "preact";
import Close from "./modal/top/close"
import "./style.less"

const ErrorHandler = ({error}, {emitter: {emit}}) => {
  const className = error ? "show" : ""
  return (
    <div className={`errorHandler ${className}`}>
      <Close destroy={() => {emit("removeError")}}/>
      <h4 className="errorMessage">{error}</h4>
    </div>
  )
}

export default ErrorHandler
