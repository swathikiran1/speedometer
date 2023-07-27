// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  applyAccelerate = () => {
    this.setState(prevState => {
      let result = null
      if (prevState.count !== 200) {
        result = {count: prevState.count + 10}
      }

      return result
    })
  }

  applyBreak = () => {
    let result = null
    this.setState(prevState => {
      if (prevState.count !== 0) {
        result = {count: prevState.count - 10}
      }

      return result
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="paragraph">Speed is {count}mph</h1>
        <p className="paragraph1">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="button1"
            onClick={this.applyAccelerate}
            type="button"
          >
            Accelerate
          </button>
          <button className="button2" onClick={this.applyBreak} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
