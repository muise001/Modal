import { h } from "preact";
import Close from "./Components/close";
import "./style.less";

const ErrorHandler = ({ error }, { getState, emitter: { emit } }) => {
  const state = getState();
  const className = state.error ? "show" : "";

  return (
    <div className={`errorHandler ${className}`}>
      <Close destroy={() => {emit("removeError")}}/>
      <h4 className="errorMessage">{state.error}</h4>
    </div>
  )
}

export default ErrorHandler;
