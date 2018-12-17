
const Modal = ({ children }) => {
  return (
    <div className="modal">
      <LookIcon />
      <CloseIcon />
      {children}
    </div>
  )
}
