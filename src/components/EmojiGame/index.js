/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import Navbar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    selectedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({
      isGameInProgress: true,
      selectedEmojisList: [],
    })
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  onSelectEmoji = id => {
    const {emojisList} = this.props
    const {selectedEmojisList} = this.state
    const isEmojiSelected = selectedEmojisList.includes(id)

    if (isEmojiSelected) {
      this.finishGameAndSetTopScore(selectedEmojisList.length)
    } else {
      if (emojisList.length - 1 === selectedEmojisList.length) {
        this.finishGameAndSetTopScore(selectedEmojisList.length)
      }
      this.setState({selectedEmojisList: [...selectedEmojisList, id]})
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            onSelectEmoji={this.onSelectEmoji}
          />
        ))}
      </ul>
    )
  }

  renderGameResult = () => {
    const {emojisList} = this.props
    const {selectedEmojisList} = this.state
    const isWon = emojisList.length === selectedEmojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={selectedEmojisList.length}
        playAgain={this.resetGame}
      />
    )
  }

  render() {
    const {selectedEmojisList, isGameInProgress, topScore} = this.state
    return (
      <div className="app-container">
        <Navbar
          score={selectedEmojisList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="game-container">
          {isGameInProgress ? this.renderEmojiList() : this.renderGameResult()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
