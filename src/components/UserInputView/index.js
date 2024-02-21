import './index.css'

const UserInputView = props => {
  const {inputDetails} = props
  const {inputValue, letterCount} = inputDetails
  return (
    <li className="list-item">
      <p>
        {inputValue}:{letterCount}
      </p>
    </li>
  )
}

export default UserInputView
