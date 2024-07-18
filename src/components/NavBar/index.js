import './index.css'

const NavBAr = props => {
  const {score, topScore} = props
  const isSet = score === undefined || topScore === undefined
  return (
    <div className="navbar">
      <div className="nav-icon-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="whole-logo"
        />
        <h1 style={{fontSize: '18px'}}>Emoji Game</h1>
      </div>
      {isSet ? null : (
        <div className="nav-text-cont">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBAr
