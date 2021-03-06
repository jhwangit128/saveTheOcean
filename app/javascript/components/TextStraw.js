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
      <div className="text-straw">
        IN THE US AND UK, OVER <br />
        <CountUp className="number" delay={1} end={550000000}>
        </CountUp>
        &nbsp;PLASTIC STRAWS <br /> THROWN AWAY EVERY DAY
      </div>
    )
  }
}

export default Text
