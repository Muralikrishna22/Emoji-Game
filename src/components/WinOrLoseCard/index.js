import './index.css'

const WinOrLoseCard = props => {
  const {score, isWon, playAgain} = props

  const onClickToPlay = () => {
    playAgain()
  }

  const result = isWon ? 'You Won' : 'You Lose'

  const imgUrl = isWon
    ? 'https:assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const scoreText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-container">
      <div className="score-card">
        <h1 className="result">{result}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="score">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickToPlay}
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="result-img" />
    </div>
  )
}
export default WinOrLoseCard

// https://assets.ccbp.in/frontend/react-js/won-game-img.png
// https://assets.ccbp.in/frontend/react-js/lose-game-img.png
