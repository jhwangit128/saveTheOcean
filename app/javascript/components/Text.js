// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import CountUp from 'react-countup'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class Text extends React.Component {
  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    return (
      <div>
        <div className="text">
          WORLD WIDE, OVER<br />
          <CountUp className="number" delay={1} end={500000000000}>
          </CountUp>
          &nbsp;PLASTIC BOTTLES <br /> USED EVERY YEAR
        </div>
      </div>
    )
  }
}

export default Text
