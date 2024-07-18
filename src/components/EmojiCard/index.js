import './index.css'

const EmojiCard = props => {
  const {Details, click} = props
  const {id, emojiName, emojiUrl} = Details
  const clicked = () => {
    click(id)
  }
  return (
    <li className="EmjCard">
      <button className="btn-emj" onClick={clicked} type="button">
        <img className="cardImage" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
