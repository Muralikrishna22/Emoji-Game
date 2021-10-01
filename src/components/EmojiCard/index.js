import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onSelectEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    onSelectEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-btn" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
