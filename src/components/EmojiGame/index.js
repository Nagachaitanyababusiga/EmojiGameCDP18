import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {prevClicked: [], score: 0, topScore: 0, isGameDone: false}

  click = id => {
    this.setState(prevState => {
      const {prevClicked, score, topScore} = prevState
      if (prevClicked.includes(id)) {
        return {isGameDone: true}
      }
      const tempscore = score + 1
      const temptop = tempscore > topScore ? tempscore : topScore
      const templist = [...prevClicked, id]
      const tempgame = tempscore >= 12
      return {
        prevClicked: templist,
        score: tempscore,
        topScore: temptop,
        isGameDone: tempgame,
      }
    })
  }

  replay = () => {
    this.setState(prevState => ({
      prevClicked: [],
      score: 0,
      topScore: prevState.topScore,
      isGameDone: false,
    }))
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const emojilst = shuffledEmojisList()
    const {isGameDone, score, topScore} = this.state
    console.log('in render')
    console.log(this.state)

    return isGameDone ? (
      <WinOrLoseCard score={score} replay={this.replay} />
    ) : (
      <div className="cont-1">
        <NavBar score={score} topScore={topScore} />
        <div className="cont-2">
          <ul className="lst-cont">
            {emojilst.map(x => (
              <EmojiCard key={x.id} Details={x} click={this.click} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
