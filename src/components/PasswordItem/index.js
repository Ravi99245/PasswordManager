import './index.css'

const PasswordItem = props => {
  const {passwordItem, showPassword, onDeletePasswordItem} = props
  const {id, website, userName, password, backColor} = passwordItem
  const firstWord = website.slice(0, 1).toUpperCase()

  const deletePassword = () => {
    onDeletePasswordItem(id)
  }

  return (
    <li className="passwordItem">
      <h1 className={`firstWord ${backColor}`}>{firstWord}</h1>
      <div className="details">
        <p className="websiteName">{website}</p>
        <p className="websiteName">{userName}</p>
        {showPassword ? (
          <p className="websiteName">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button
        className="button1"
        type="button"
        data-testid="delete"
        onClick={deletePassword}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
