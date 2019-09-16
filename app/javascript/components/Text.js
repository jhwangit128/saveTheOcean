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
          WORLD WIDE, OVER&nbsp;<br />
          <CountUp className="number" delay={1} end={500000000000}>
          </CountUp><br />
          &nbsp;PLASTIC BOTTLES USED EVERY YEAR
        </div>
      </div>
    )
  }
}

export default Text
