import './index.css'
import NavBar from '../NavBar'

const WinOrLoseCard = props => {
  const {score, replay} = props
  const won = score === 12
  const clickedReplay = () => {
    replay()
  }
  return (
    <div className="cont-1">
      <NavBar />
      <div className="cont-2">
        {won ? (
          <div className="win-cont">
            <div className="win-text-cont">
              <h1>You Won</h1>
              <p>Best Score</p>
              <p>{score}/12</p>
              <button
                type="button"
                className="play-again"
                onClick={clickedReplay}
              >
                Play Again
              </button>
            </div>
            <img
              className="winorloseImage"
              alt="win or lose"
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            />
          </div>
        ) : (
          <div className="win-cont">
            <div className="win-text-cont">
              <h1>You Lose</h1>
              <p>Score</p>
              <p>{score}/12</p>
              <button
                type="button"
                className="play-again"
                onClick={clickedReplay}
              >
                Play Again
              </button>
            </div>
            <img
              className="winorloseImage"
              alt="win or lose"
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
