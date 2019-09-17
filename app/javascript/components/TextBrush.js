// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import CountUp from 'react-countup'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class TextBrush extends React.Component {
  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    return (
      <div className="text-brush">
        IN THE US AND UK, OVER<br />
        <CountUp className="number" delay={1} end={1000000000}>
        </CountUp>
        PLASTIC STRAWS<br /> THROWN AWAY EVERY DAY
      </div>
    )
  }
}

export default TextBrush
