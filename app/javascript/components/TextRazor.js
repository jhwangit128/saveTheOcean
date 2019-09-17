// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import CountUp from 'react-countup'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class TextRazor extends React.Component {
  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    return (
      <div className="text-razor">
        IN THE US, OVER <br />
        <CountUp className="number" delay={1} end={2000000000}>
        </CountUp>
        &nbsp;DISPOSABLE RAZORS<br />THROWN AWAY EVERY DAY
      </div>
    )
  }
}

export default TextRazor
