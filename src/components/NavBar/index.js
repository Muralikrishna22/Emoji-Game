import './index.css'

const Navbar = props => {
  const {score, topScore, isGameInProgress} = props

  return (
    <div className="nav-bar">
      <div className="nav-bar-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1 className="emoji-game">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="scores">Score: {score}</p>
          <p className="scores">Top Score: {topScore} </p>
        </div>
      )}
    </div>
  )
}

export default Navbar
