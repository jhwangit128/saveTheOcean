// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import CountUp from 'react-countup'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class TextGum extends React.Component {
  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    return (
      <div className="text-gum">
        WORLDWIDE, OVER<br />
        <CountUp className="number" delay={1} end={100000}>
        </CountUp>TONS OF
        &nbsp;GUMS <br /> THROWN AWAY EVERY DAY
      </div>
    )
  }
}

export default TextGum
