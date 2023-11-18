import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const colorsList = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
  'color10',
]

class PasswordManager extends Component {
  state = {
    website: '',
    userName: '',
    password: '',
    searchInput: '',
    passwordsList: [],
    showPassword: false,
    noPasswords: true,
  }

  submitPasswordItem = event => {
    const {website, userName, password} = this.state
    const backColor = colorsList[Math.floor(Math.random() * colorsList.length)]
    event.preventDefault()
    const passWordItem = {
      id: uuidv4(),
      website,
      userName,
      password,
      backColor,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, passWordItem],
      website: '',
      userName: '',
      password: '',
      noPasswords: false,
    }))
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changeUserName = event => {
    this.setState({userName: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  changeCheckBox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onDeletePasswordItem = id => {
    const {passwordsList} = this.state
    const remainingList = passwordsList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordsList: remainingList})
  }

  render() {
    const {
      website,
      userName,
      password,
      searchInput,
      passwordsList,
      showPassword,
      noPasswords,
    } = this.state
    const noOfPasswords = passwordsList.length
    console.log(showPassword)
    const filterdList = passwordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          className="password-logo"
          alt="app logo"
        />
        <div className="input-container">
          <form className="input-password" onSubmit={this.submitPasswordItem}>
            <h1 className="heading">Add New Password</h1>
            <div className="website-container">
              <label className="website" htmlFor="website-element">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  className="website-logo"
                  alt="website"
                />
              </label>
              <input
                type="text"
                id="website-element"
                className="email"
                value={website}
                placeholder="Enter Website"
                onChange={this.changeWebsite}
              />
            </div>
            <div className="website-container">
              <label className="website" htmlFor="userName-element">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  className="website-logo"
                  alt="username"
                />
              </label>
              <input
                type="text"
                id="userName-element"
                className="email"
                value={userName}
                placeholder="Enter Username"
                onChange={this.changeUserName}
              />
            </div>
            <div className="website-container">
              <label className="website" htmlFor="password-element">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  className="website-logo"
                  alt="password"
                />
              </label>
              <input
                type="password"
                id="password-element"
                className="email"
                value={password}
                placeholder="Enter Password"
                onChange={this.changePassword}
              />
            </div>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            className="manager"
            alt="password manager"
          />
        </div>
        <div className="password-container">
          <div className="search-section">
            <div className="heading-element">
              <h1 className="heading1">Your Passwords</h1>
              <p className="password-number">{noOfPasswords}</p>
            </div>
            <div className="website-container">
              <label className="search" htmlFor="search-element">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  className="website-logo"
                  alt="search"
                />
              </label>
              <input
                type="search"
                id="search-element"
                className="searchInput"
                placeholder="search"
                value={searchInput}
                onChange={this.changeSearchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkBox-container">
            <input
              type="checkbox"
              className="checkBox-element"
              id="checkBox"
              onChange={this.changeCheckBox}
            />
            <label className="checkBox-label" htmlFor="checkBox">
              Show Passwords
            </label>
          </div>
          {noPasswords || filterdList.length === 0 ? (
            <div className="noPasswords-contianer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                className="noPassword"
                alt="no passwords"
              />
              <p className="noPassword">No Passwords</p>
            </div>
          ) : (
            <ul className="passwords">
              {filterdList.map(eachItem => (
                <PasswordItem
                  key={uuidv4()}
                  passwordItem={eachItem}
                  showPassword={showPassword}
                  onDeletePasswordItem={this.onDeletePasswordItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
