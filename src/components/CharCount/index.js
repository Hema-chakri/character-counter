import {v4 as uuid} from 'uuid'
import {Component} from 'react'
import './index.css'
import UserInputView from '../UserInputView'

class CharCount extends Component {
  state = {userInputList: [], inputValue: ''}

  onEnteringKey = event => {
    this.setState({inputValue: event.target.value})
  }

  onAddWordAndCount = event => {
    event.preventDefault()
    const {userInputList, inputValue} = this.state
    const letterCount = inputValue.length
    const id = uuid()

    const newItem = {id, inputValue, letterCount}

    this.setState({
      userInputList: [...userInputList, newItem],
      inputValue: '',
    })
  }

  render() {
    const {userInputList, inputValue} = this.state

    return (
      <div className="app-container">
        <div className="left-part-container">
          <h1 className="heading">Count the characters like a Boss...</h1>
          <div className="left-part-bottom-container">
            {userInputList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="image-style"
              />
            ) : (
              <ul>
                {userInputList.map(eachItem => (
                  <UserInputView inputDetails={eachItem} key={eachItem.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
        <form
          className="right-part-container"
          onSubmit={this.onAddWordAndCount}
        >
          <h1 className="right-heading">Character Counter</h1>
          <div>
            <input
              type="text"
              className="input-style"
              onChange={this.onEnteringKey}
              value={inputValue}
              placeholder="Enter the Characters here"
            />
            <button type="submit" className="button-style">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CharCount
